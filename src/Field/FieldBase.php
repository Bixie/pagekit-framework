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


abstract class FieldBase implements FieldInterface {

	/**
	 * @var string
	 */
	public $type;
	/**
	 * @var array
	 */
	public $options = [];

	/**
	 * @return array
	 */
	public function getOptions () {

		/** @var \Bixie\Framework\Type\TypeBase $type */
		$type = App::module('bixie/formmaker')->getType($this->type);

		return $type->getOptions($this);
	}

	/**
	 * @param array $options
	 */
	public function setOptions ($options) {
		$this->options = $options;
	}

}