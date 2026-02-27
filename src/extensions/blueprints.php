<?php return [ 'blocks/pwfeaturelist' => function () {

    /* -------------- Config --------------*/
    $config   = pwConfig::load('pwfeaturelist');
		$settings    = $config['settings'];
		$tabSettings = $config['tabs'];
		$defaults    = $config['defaults'];
		$fields      = $config['fields'];
		$editor      = $config['editor'];

    /* -------------- Allowed Fields --------------*/
		$defaultTagline = !empty($settings['tagline']);
		$defaultHeading = !empty($settings['heading']);
		$defaultEditor = !empty($settings['editor']);

		/* -------------- Tabs --------------*/
    $tabs = [];

		/* -------------- Content Tab --------------*/
		$contentFields = [
			'headlineContent' => ['extends' => 'pagewizard/headlines/content'],
		];

		/* -------------- Tagline --------------*/
		if ($defaultTagline) {
			$contentFields['tagline'] = [
				'extends' => 'pagewizard/fields/tagline',
				'align'   => $fields['align-tagline']
			];
		}
		/* -------------- Heading --------------*/
		if ($defaultHeading) {
			$contentFields['heading'] = [
				'extends' => 'pagewizard/fields/heading',
				'align'   => $fields['align-heading']
			];
		}
		/* -------------- Editor --------------*/
		if ($defaultEditor) {
			$contentFields['editor'] = pwEditor::contentField($defaults, $editor, $settings, $fields);
		}
		/* -------------- Blocks --------------*/
		$contentFields['blocksAlignment'] = [
			'type'    => 'pwalign',
			'align'   => $fields['align-blocks'],
			'default' => $fields['align-blocks'],
		];
		$contentFields['blocks'] = [
			'extends'   => 'pagewizard/fields/blocks',
			'label'   => 'kirbyblock-featurelist.items',
			'fieldsets' => ['pwfeaturelistitem'],
		];

		$tabs['content'] = [
			'label'  => 'pw.tab.content',
			'fields' => $contentFields,
		];

		/* -------------- Layout Tab --------------*/
		pwConfig::addTab($tabs, 'layout', $tabSettings['layout'] ?? true, pwLayout::options('pwfeaturelist', $defaults, [
			'headlineColumns' => ['extends' => 'pagewizard/headlines/columns'],
			'columnsSm' => [
				'extends' => 'pagewizard/fields/columns',
				'default' => $defaults['columns-sm'],
				'label' => 'pw.field.columns.sm',
				'help' => 'pw.field.columns.sm.help'
			],
			'columnsMd' => [
				'extends' => 'pagewizard/fields/columns',
				'default' => $defaults['columns-md'],
				'label' => 'pw.field.columns.md',
				'help' => 'pw.field.columns.md.help'
			],
			'columnsLg' => [
				'extends' => 'pagewizard/fields/columns',
				'default' => $defaults['columns-lg'],
				'label' => 'pw.field.columns.lg',
				'help' => 'pw.field.columns.lg.help'
			],
			'columnsXl' => [
				'extends' => 'pagewizard/fields/columns',
				'default' => $defaults['columns-xl'],
				'label' => 'pw.field.columns.xl',
				'help' => 'pw.field.columns.xl.help'
			]
		]));

		/* -------------- Style Tab --------------*/
		pwConfig::addTab($tabs, 'style', $tabSettings['style'] ?? true, pwStyle::options('pwfeaturelist', $defaults));

		/* -------------- Grid Tab --------------*/
		pwConfig::addTab($tabs, 'grid', $tabSettings['grid'] ?? false, pwGrid::layout('pwfeaturelist', $defaults));

		/* -------------- Settings Tab --------------*/
		pwConfig::addTab($tabs, 'settings', $tabSettings['settings'] ?? true, pwSettings::options('pwfeaturelist', $defaults));

		/* -------------- Blueprint --------------*/
		return [
			'name'	=> 'kirbyblock-featurelist.name',
			'icon'  => 'featurelist',
			'tabs'	=> $tabs
		];
	},

	'blocks/pwfeaturelistitem' => \Kirby\Data\Data::read(__DIR__ . '/../blueprints/item.yml'),

];
