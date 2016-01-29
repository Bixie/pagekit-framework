<?php

namespace Bixie\Framework\FieldType;

use Bixie\Framework\Field\FieldBase;

interface FieldTypeInterface  {

	/**
	 * @return string
	 */
	public function getLabel ();

	/**
	 * @return array
	 */
	public function getExtensions ();

	/**
	 * @param FieldBase $field
	 * @return array
	 */
	public function getOptions (FieldBase $field);

	/**
	 * @param FieldBase $field
	 * @param array $value
	 * @return array
	 */
	public function prepareValue (FieldBase $field, $value);

	/**
	 * @param FieldBase $field
	 * @param array $value
	 * @return array
	 */
	public function formatValue (FieldBase $field, $value);

	/**
	 * @param \Pagekit\View\Asset\AssetManager $scripts
	 */
	public function registerScripts ($scripts);

	/**
	 * @param \Pagekit\View\Asset\AssetManager $styles
	 */
	public function addStyles ($styles);

	/**
	 * @return array
	 */
	public function toArray();
}