<?php return [ 'blocks/pwfeaturelist' => function () {

    /* -------------- Config --------------*/
    $config       = pwConfig::load('pwfeaturelist');
		$settings     = $config['content'];
		$tabSettings  = $config['tabs'];
		$defaults     = $config['defaults'];
		$fields       = $config['fields'];
		$editor       = $config['editor'];
		$fieldOptions = $config['field-options'];


		/* -------------- Tabs --------------*/
    $tabs = [];

		/* -------------- Content Tab --------------*/
		$contentFields = [
			'headlineContent' => ['extends' => 'pagewizard/headlines/content'],
		];

		/* -------------- Tagline --------------*/
		if (!empty($settings['tagline'])) {
			$contentFields['tagline'] = [
				'extends'      => 'pagewizard/fields/tagline',
				'align'        => $fields['align-tagline'],
				'alignOptions' => $fieldOptions['tagline']['align'] ?? null,
			];
		}
		/* -------------- Heading --------------*/
		if (!empty($settings['heading'])) {
			$contentFields['heading'] = [
				'extends'      => 'pagewizard/fields/heading',
				'align'        => $fields['align-heading'],
				'level'        => $fields['level-heading'] ?? null,
				'size'         => $fields['size-heading'] ?? null,
				'sizeOptions'  => $fieldOptions['heading']['sizes'] ?? null,
				'alignOptions' => $fieldOptions['heading']['align'] ?? null,
				'levelOptions' => $fieldOptions['heading']['level'] ?? null,
			];
		}
		/* -------------- Editor --------------*/
		if (!empty($settings['editor'])) {
			$contentFields['editor'] = pwEditor::contentField($editor, $settings);
			$contentFields['editor']['align']        = $fields['align-editor'] ?? null;
			$contentFields['editor']['size']         = $fields['size-editor'] ?? null;
			$contentFields['editor']['alignOptions'] = $fieldOptions['editor']['align'] ?? null;
			$contentFields['editor']['sizeOptions']  = $fieldOptions['editor']['sizes'] ?? null;
			$contentFields['editor']['defaultMode'] = $fields['mode-editor'] ?? null;
		}
		/* -------------- Blocks --------------*/
		$contentFields['blocksAlignment'] = [
			'type'         => 'pwalign',
			'align'        => $fields['align-blocks'],
			'default'      => $fields['align-blocks'],
			'alignOptions' => $fieldOptions['blocks']['align'] ?? null,
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
		], $config['layout'] ?? []));

		/* -------------- Style Tab --------------*/
		pwConfig::addTab($tabs, 'style', $tabSettings['style'] ?? true, pwStyle::options('pwfeaturelist', $defaults, [], $config['style'] ?? []));

		/* -------------- Grid Tab --------------*/
		pwConfig::addTab($tabs, 'grid', $tabSettings['grid'] ?? false, pwGrid::layout('pwfeaturelist', $defaults));

		/* -------------- Settings Tab --------------*/
		pwConfig::addTab($tabs, 'settings', $tabSettings['settings'] ?? true, pwSettings::options('pwfeaturelist', $defaults, [], $config['settings'] ?? []));

		/* -------------- Blueprint --------------*/
		return [
			'name'	=> 'kirbyblock-featurelist.name',
			'icon'  => 'featurelist',
			'tabs'	=> $tabs
		];
	},

	'blocks/pwfeaturelistitem' => \Kirby\Data\Data::read(__DIR__ . '/../blueprints/item.yml'),

];
