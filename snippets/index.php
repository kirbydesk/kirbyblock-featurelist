<?php

// Config
$config   = pwConfig::load('pwfeaturelist');
$settings = $config['content'];

// Custom Background
pwSnippet::customCss($block);

// Section + Grid open
echo pwSnippet::sectionOpen('featurelist', $block, $settings);
echo pwSnippet::gridOpen($block);

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

// Blocks (items)
$items = $block->blocks()->toBlocks();
if ($items->count() > 0):

	echo '<div data-block="items"';
	echo ' data-columns-sm="'.$block->columnssm()->value().'"';
	echo ' data-columns-md="'.$block->columnsmd()->value().'"';
	echo ' data-columns-lg="'.$block->columnslg()->value().'"';
	echo ' data-columns-xl="'.$block->columnsxl()->value().'"';
	echo ' data-align="'.$block->blocksalignment()->value().'"';
	echo '>'."\n";

	foreach ($items as $item):

		echo '<div data-block="item">'."\n";

			// Icon
			if ($item->icon()->isNotEmpty()):
				echo '<div data-field="icon">'.$item->icon()->value().'</div>';
			endif;

			// Content
			echo '<div data-field="content">'."\n";

				// Heading
				echo '<div data-field="heading" data-align="'.$block->blocksalignment()->value().'">'.$item->heading()->value().'</div>';

				// Description
				echo '<div data-field="text" data-opacity="dimmed" data-align="'.$block->blocksalignment()->value().'">'.$item->description()->value().'</div>';

			echo '</div>'."\n"; // End Content
		echo '</div>'."\n"; // End Item
	endforeach;

	echo '</div>'."\n"; // End Items
endif;

// Close
echo pwSnippet::gridClose();
echo pwSnippet::sectionClose();
