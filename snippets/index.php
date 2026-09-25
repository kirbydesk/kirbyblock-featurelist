<?php

// Config
$config   = pwConfig::load('pwfeaturelist');
$settings = $config['content'];
$defaults = $config['defaults'];

// Layout (drawer) and item look (Project Wizard → Items)
$sectionLayout = $block->sectionlayout()->or($defaults['section-layout'] ?? 'stacked')->value();
$iconPosition  = $defaults['item-icon-position'] ?? 'left';
$iconStyle     = $defaults['item-icon-style'] ?? 'plain';
$titleStyle    = $defaults['item-title-style'] ?? 'above';

// Custom Background
pwSnippet::customCss($block);

// Section + Grid open
echo pwSnippet::sectionOpen('featurelist', $block, $settings, ' data-layout-style="'.$sectionLayout.'"');
echo pwSnippet::gridOpen($block);

// Split layout: intro (tagline, heading, text) in its own column next to the items
if ($sectionLayout === 'split') echo '<div data-block="intro">'."\n";

// Tagline
if (!empty($settings['tagline'])):
	snippet('tagline', ['content' => $block]);
endif;

// Heading
if (!empty($settings['heading'])):
	snippet('heading', ['content' => $block]);
endif;

// Editor
if (!empty($settings['editor'])):
	snippet('editor', ['content' => $block]);
endif;

if ($sectionLayout === 'split') echo '</div>'."\n"; // End intro

// Blocks (items)
$items = $block->blocks()->toBlocks();
if ($items->count() > 0):

	echo '<div data-block="items"';
	echo ' data-columns-sm="'.$block->columnssm()->value().'"';
	echo ' data-columns-md="'.$block->columnsmd()->value().'"';
	echo ' data-columns-lg="'.$block->columnslg()->value().'"';
	echo ' data-columns-xl="'.$block->columnsxl()->value().'"';
	echo ' data-align="'.$block->blocksalignment()->value().'"';
	echo ' data-icon-position="'.$iconPosition.'"';
	echo ' data-icon-style="'.$iconStyle.'"';
	echo ' data-shape="'.($defaults['item-shape'] ?? 'custom').'"';
	echo ' data-title-style="'.$titleStyle.'"';
	echo '>'."\n";

	foreach ($items as $item):

		echo '<div data-block="item">'."\n";

			// Icon
			if ($item->icon()->isNotEmpty()):
				echo '<div data-field="icon">'.$item->icon()->value().'</div>';
			endif;

			// Content
			echo '<div data-field="content">'."\n";

				$align       = $block->blocksalignment()->value();
				$heading     = $item->heading()->value();
				$description = $item->description()->value();

				if ($titleStyle === 'inline' && $heading !== ''):
					// Title as run-in at the start of the text: "Title. Text …"
					$runIn = '<strong data-field="heading">'.$heading.'.</strong> ';
					$pos = strpos($description, '<p>');
					$description = $pos === 0 || ($pos !== false && trim(substr($description, 0, $pos)) === '')
						? substr_replace($description, '<p>'.$runIn, $pos, 3)
						: $runIn.$description;
				elseif ($heading !== ''):
					echo '<div data-field="heading" data-align="'.$align.'">'.$heading.'</div>';
				endif;

				// Description
				if ($description !== ''):
					echo '<div data-field="text" data-opacity="dimmed" data-align="'.$align.'">'.$description.'</div>';
				endif;

			echo '</div>'."\n"; // End Content
		echo '</div>'."\n"; // End Item
	endforeach;

	echo '</div>'."\n"; // End Items
endif;

// Close
echo pwSnippet::gridClose();
echo pwSnippet::sectionClose();
