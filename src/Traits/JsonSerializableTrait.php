<?php

namespace Bixie\Framework\Traits;


trait JsonSerializableTrait {

	/**
	 * @param array $data
	 * @param array $ignore
	 * @return array
	 */
	public function toArray ($data = [], $ignore = []) {
		foreach (get_object_vars($this) as $key => $value) {
			$data[$key] = $value;
		}
		return array_diff_key($data, array_flip($ignore));
	}

	/**
	 * @return array
	 */
	function jsonSerialize () {
		return $this->toArray();
	}

}