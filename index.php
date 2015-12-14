<?php

return [

	'name' => 'bixie/framework',

	'type' => 'extension',

	'main' => 'Bixie\\Framework\\FrameworkModule',

	'autoload' => [

		'Bixie\\Framework\\' => 'src'

	],

	'fieldtypes' => 'fieldtypes',

	'resources' => [

		'bixie/framework:' => ''

	],

	'settings' => 'settings-bixframework',

	'config' => [

	],

	'events' => [
		'view.scripts' => function ($event, $scripts) use ($app) {
			$scripts->register('framework-settings', 'bixie/framework:app/bundle/settings.js', '~extensions');
			$scripts->register('bixie-framework', 'bixie/framework:app/bundle/bixie-framework.js');
			//register fields
			$scripts->register('bixie-fieldtypes', 'bixie/framework:app/bundle/bixie-fieldtypes.js', ['vue']);
			foreach ($app->module('bixie/framework')->getFieldTypes() as $fieldType) {
				$fieldType->registerScripts($scripts);
			}
		}
	]

];
