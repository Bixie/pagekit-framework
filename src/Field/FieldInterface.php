<?php


namespace Bixie\Framework\Field;


interface FieldInterface {

	/**
	 * @param string $type
	 */
	public function setFieldType ($type);

	/**
	 * @return \Bixie\Framework\FieldType\FieldTypeBase
	 */
	public function getFieldType ();

	/**
	 * Set select-options
	 * @param array $options
	 */
	public function setOptions ($options);

	/**
	 * Get select-options
	 * @return array
	 */
	public function getOptions ();

	/**
	 * reference value=>label for easy formatting
	 * @return array
	 */
	public function getOptionsRef ();

	/**
	 * Prepare default value before displaying form
	 * @return array
	 */
	public function prepareValue ();

	/**
	 * Prepare value before rendering
	 * @return array
	 */
	public function formatValue ();

	/**
	 * @param array $data
	 * @param array $ignore
	 * @return array
	 */
	public function toArray(array $data = [], array $ignore = []);

}