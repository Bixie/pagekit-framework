<?php

namespace Bixie\Framework\FieldValue;


interface FieldValueInterface {

	/**
	 * @return \Bixie\Framework\FieldType\FieldTypeBase
	 */
	public function getFieldType ();

	/**
	 * @return array
	 */
	public function toFormattedArray ();

	/**
	 * @return array
	 */
	public function formatValue ();

}