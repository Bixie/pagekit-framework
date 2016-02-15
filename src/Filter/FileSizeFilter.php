<?php


namespace Bixie\Framework\Filter;

use Pagekit\Filter\AbstractFilter;

class FileSizeFilter extends AbstractFilter {

	public function filter ($value) {
		$i = floor( log($value) / log(1024) );
		return number_format( $value / pow(1024, $i), 2) . ' ' . ['B', 'kB', 'MB', 'GB', 'TB'][$i];
	}

}