<?php

namespace Bixie\Framework;

use Pagekit\Application as App;
use Pagekit\Module\Module;
use Bixie\Framework\FieldType\FieldTypeBase;

class FrameworkModule extends Module {
	/**
	 * @var FieldTypeBase[]
	 */
	protected $fieldTypes;

	/**
	 * {@inheritdoc}
	 */
	public function main (App $app) {

	}

	/**
	 * @param  string $type
	 * @return FieldTypeBase
	 */
	public function getFieldType ($type) {
		$types = $this->getFieldTypes();

		return isset($types[$type]) ? $types[$type] : null;
	}

	/**
	 * @return array
	 */
	public function getFieldTypes () {
		//todo cache this
		if (!$this->fieldTypes) {

			$this->types = [];
			$app = App::getInstance(); //available for index.php files
			$paths = [];

			foreach (App::module() as $module) {
				if ($module->get('fieldtypes')) {
					$paths = array_merge($paths, glob(sprintf('%s/%s/*/index.php', $module->path, $module->get('fieldtypes')), GLOB_NOSORT) ?: []);
				}
			}

			foreach ($paths as $p) {
				$package = array_merge ([
					'id' => '',
					'main' => '',
					'class' => '\Bixie\Framework\FieldType\FieldType',
					'resource' => 'bixie/framework:app/bundle',
					'config' => [
						'hasOptions' => 0,
						'readonlyOptions' => 0,
						'required' => 0,
						'multiple' => 0,
					],
					'dependancies' => [],
					'styles' => [],
					'getOptions' => '',
					'prepareValue' => '',
					'formatValue' => ''
				], include($p));
				$this->registerFieldType($package);
			}

		}

		return $this->fieldTypes;
	}

	/**
	 * Register a field type.
	 * @param array $package
	 */
	public function registerFieldType ($package) {
		$this->fieldTypes[$package['id']] = new $package['class']($package);
	}

}
