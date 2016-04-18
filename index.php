<?php

return [

	'name' => 'bixie/framework',

	'type' => 'extension',

	'main' => 'Bixie\\Framework\\FrameworkModule',

	'fieldtypes' => 'fieldtypes',

	'autoload' => [
		'Bixie\\Framework\\' => 'src'
	],
	
	'resources' => [

		'bixie/framework:' => ''

	],

	'permissions' => [

		'bixframework: upload files' => [
			'title' => 'Upload files'
		]

	],

	'settings' => 'settings-bixframework',

	'config' => [

	],

	'events' => [
		'view.scripts' => function ($event, $scripts) use ($app) {
			$scripts->register('framework-settings', 'bixie/framework:app/bundle/settings.js', '~extensions');
			$scripts->register('bixie-framework', 'bixie/framework:app/bundle/bixie-framework.js', ['vue']);
			//register fields
			$scripts->register('bixie-fieldtypes', 'bixie/framework:app/bundle/bixie-fieldtypes.js', ['vue', 'bixie-framework', 'uikit-tooltip']);
			foreach ($app->module('bixie/framework')->getFieldTypes() as $fieldType) {
				$fieldType->registerScripts($scripts);
			}
		},

		'console.init' => function ($event, $console) {

			$console->add(new Bixie\Framework\Console\Commands\TranslateCommand());

		}
	]

];
