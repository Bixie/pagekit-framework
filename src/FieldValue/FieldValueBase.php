<?php

namespace Bixie\Framework\FieldValue;

use Pagekit\Application as App;
use Bixie\Framework\Field\FieldBase;
use Pagekit\System\Model\DataModelTrait;

abstract class FieldValueBase implements FieldValueInterface{

	use DataModelTrait;

	/**
	 * @var FieldBase
	 */
	public $field;

	/**
	 * @var \Bixie\Framework\FieldType\FieldTypeBase
	 */
	protected $fieldType;

	/**
	 * Fieldsubmission constructor.
	 * @param FieldBase $field
	 * @param array $data
	 */
	public function __construct (FieldBase $field, $data) {
		$this->field = $field;
		$this->data = $data;
		$this->fieldType = App::module('bixie/framework')->getFieldType($field->type);
	}

	/**
	 * @return \Bixie\Framework\FieldType\FieldTypeBase
	 */
	public function getFieldType () {
		if (!isset($this->fieldType)) {
			$this->fieldType = App::module('bixie/framework')->getFieldType($this->field->type);
		}
		return $this->fieldType;
	}

	/**
	 * @return array
	 */
	public function toFormattedArray () {
		return [
			'field' => $this->field->toArray(),
			'slug' => $this->field->slug,
			'type' => $this->getFieldType()->toArray(),
			'label' => $this->field->label,
			'value' => $this->formatValue()
		];
	}

	/**
	 * @return array
	 */
	public function formatValue () {

		$value = $this->getFieldType()->formatValue($this->field, $this->get('value'));

		return is_array($value) ? $value : [$value];
	}

}