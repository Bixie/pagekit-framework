<?php
use Pagekit\Application as App;

return [
	'id' => 'htmlcode',
	'label' => __('Html code'),
	'config' => [
		'hasOptions' => 0,
		'required' => -1,
		'multiple' => 0,
		'markdown' => ''
	],
	'dependancies' => ['editor'],
	'formatValue' => function (\Bixie\Framework\Field\FieldBase $field, \Bixie\Framework\FieldValue\FieldValueBase $fieldValue) {
		return array_map(function ($val) use ($field) {
			return App::content()->applyPlugins($val, ['field' => $field, 'markdown' => $field->get('markdown')]);
		}, $fieldValue->getValue());
	}
];
