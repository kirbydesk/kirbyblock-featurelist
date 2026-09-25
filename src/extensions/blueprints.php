<?php

$columnsField = fn(string $breakpoint, $default) => [
	'extends' => 'pagewizard/fields/columns',
	'default' => $default,
	'label'   => 'pw.field.columns.' . $breakpoint,
	'help'    => 'pw.field.columns.' . $breakpoint . '.help',
];

$allSectionLayoutOptions = [
	'stacked' => ['value' => 'stacked', 'text' => ['*' => 'kirbyblock-featurelist.section-layout.stacked']],
	'split'   => ['value' => 'split',   'text' => ['*' => 'kirbyblock-featurelist.section-layout.split']],
];

return [
	'blocks/pwfeaturelist' => pwBlueprint::main('pwfeaturelist', function ($cfg) use ($columnsField, $allSectionLayoutOptions) {
		$defaults = $cfg['defaults'];
		$sectionLayoutKeys    = $cfg['style']['section-layout']['options'] ?? array_keys($allSectionLayoutOptions);
		$sectionLayoutOptions = array_values(array_intersect_key($allSectionLayoutOptions, array_flip($sectionLayoutKeys)));
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
			'styleExtras' => [
				'sectionLayout' => count($sectionLayoutOptions) <= 1
					? ['type' => 'hidden', 'default' => $defaults['section-layout'] ?? 'stacked']
					: [
						'label'    => ['*' => 'kirbyblock-featurelist.section-layout'],
						'help'     => ['*' => 'kirbyblock-featurelist.section-layout.help'],
						'type'     => 'toggles',
						'default'  => $defaults['section-layout'] ?? 'stacked',
						'width'    => '1/1',
						'options'  => $sectionLayoutOptions,
					],
			],
		];
	}),

	'blocks/pwfeaturelistitem' => \Kirby\Data\Data::read(__DIR__ . '/../blueprints/item.yml'),
];
