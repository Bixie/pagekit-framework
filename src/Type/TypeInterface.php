<?php

namespace Bixie\Framework\Type;

use Bixie\Framework\Field\FieldBase;

interface TypeInterface  {

	/**
	 * @return string
	 */
	public function getLabel ();

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