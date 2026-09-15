<?php

$columnsField = fn(string $breakpoint, $default) => [
	'extends' => 'pagewizard/fields/columns',
	'default' => $default,
	'label'   => 'pw.field.columns.' . $breakpoint,
	'help'    => 'pw.field.columns.' . $breakpoint . '.help',
];

return [
	'blocks/pwfeaturelist' => pwBlueprint::main('pwfeaturelist', function ($cfg) use ($columnsField) {
		$defaults = $cfg['defaults'];
		return [
			'name' => 'kirbyblock-featurelist.name',
			'icon' => 'featurelist',
			'contentFields' => array_merge(
				pwBlueprint::stdContent($cfg, ['tagline', 'heading', 'editor']),
				[
					'blocksAlignment' => [
						'type'         => 'pwalign',
						'align'        => $cfg['fields']['align-blocks'],
						'default'      => $cfg['fields']['align-blocks'],
						'alignOptions' => $cfg['field-options']['blocks']['align'] ?? null,
					],
					'blocks' => [
						'extends'   => 'pagewizard/fields/blocks',
						'label'     => 'kirbyblock-featurelist.items',
						'fieldsets' => ['pwfeaturelistitem'],
					],
				]
			),
			'layoutExtras' => [
				'headlineColumns' => ['extends' => 'pagewizard/headlines/columns'],
				'columnsSm'       => $columnsField('sm', $defaults['columns-sm']),
				'columnsMd'       => $columnsField('md', $defaults['columns-md']),
				'columnsLg'       => $columnsField('lg', $defaults['columns-lg']),
				'columnsXl'       => $columnsField('xl', $defaults['columns-xl']),
			],
		];
	}),

	'blocks/pwfeaturelistitem' => \Kirby\Data\Data::read(__DIR__ . '/../blueprints/item.yml'),
];
