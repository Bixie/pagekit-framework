<?php
/* *
 *	Bixie Printshop
 *  ItemBase.php
 *	Created on 13-12-2015 19:38
 *  
 *  @author Matthijs
 *  @copyright Copyright (C)2015 Bixie.nl
 *
 */


namespace Bixie\Framework\Field;

use Pagekit\Application as App;
use Bixie\Framework\FieldType\FieldTypeBase;

abstract class FieldBase implements FieldInterface {

	/**
	 * @var string
	 */
	public $field_type;
	/**
	 * @var array
	 */
	public $options = [];

	/**
	 * @var FieldTypeBase
	 */
	protected $fieldType;

	/**
	 * @return array
	 */
	public function getOptions () {
		return $this->getFieldType()->getOptions($this);
	}

	/**
	 * @param array $options
	 */
	public function setOptions ($options) {
		$this->options = $options;
	}

	public function getFieldType () {
		if (!isset($this->fieldType)) {
			$this->fieldType = App::module('bixie/framework')->getFieldType($this->field_type);
		}
		return $this->fieldType;
	}

}