<?php

// Config
$config   = pwConfig::load('pwfeaturelist');
$settings = $config['content'];

// Custom CSS
if ($block->content()->theme()->value() === 'custom'):
	snippet('customcss', [
		'blockid' => 'b'.$block->id(),
		'textcolor' => $block->content()->textcolor()->value(),
		'backgroundcolor' => $block->content()->backgroundcolor()->value(),
	]);
endif;

// Section
echo '<section';
echo ' data-block="featurelist"';
echo ' data-block-id="b'.$block->id().'"';
echo ' data-margin-top="'.($block->margintop()->toBool() ? 'true' : 'false').'"';
echo ' data-margin-bottom="'.($block->marginbottom()->toBool() ? 'true' : 'false').'"';
echo ' data-padding-top="'.$block->paddingtop()->value().'"';
echo ' data-padding-right="'.($block->paddingright()->toBool() ? 'true' : 'false').'"';
echo ' data-padding-bottom="'.$block->paddingbottom()->value().'"';
echo ' data-padding-left="'.($block->paddingleft()->toBool() ? 'true' : 'false').'"';
echo ' data-radius-top-left="'.($block->radiustopleft()->toBool() ? 'true' : 'false').'"';
echo ' data-radius-top-right="'.($block->radiustopright()->toBool() ? 'true' : 'false').'"';
echo ' data-radius-bottom-right="'.($block->radiusbottomright()->toBool() ? 'true' : 'false').'"';
echo ' data-radius-bottom-left="'.($block->radiusbottomleft()->toBool() ? 'true' : 'false').'"';
echo ' data-style="'.$block->theme()->value().'"';
echo ' data-block-size="'.$block->blocksize()->value().'"';
e(!empty($settings['buttons']) && $block->content()->theme()->value() === 'custom' && $block->buttonstyle()->value() !== 'default', ' data-button-style="' . $block->buttonstyle()->value() . '"');
echo $block->fragment()->isNotEmpty() ? ' id="'.$block->fragment()->value().'"' : '';
echo '>'."\n";

// Grid
echo '<div data-layout="grid"><div data-layout="grid-item"';
echo ' data-grid-size-sm="'.$block->gridsizesm()->value().'"';
echo ' data-grid-size-md="'.$block->gridsizemd()->value().'"';
echo ' data-grid-size-lg="'.$block->gridsizelg()->value().'"';
echo ' data-grid-size-xl="'.$block->gridsizexl()->value().'"';
echo ' data-grid-offset-sm="'.$block->gridoffsetsm()->value().'"';
echo ' data-grid-offset-md="'.$block->gridoffsetmd()->value().'"';
echo ' data-grid-offset-lg="'.$block->gridoffsetlg()->value().'"';
echo ' data-grid-offset-xl="'.$block->gridoffsetxl()->value().'"';
echo '>'."\n";

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


// Blocks
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

echo '</div></div>'."\n"; // End Grid
echo '</section>'."\n";