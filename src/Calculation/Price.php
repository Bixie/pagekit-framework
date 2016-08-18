<?php

namespace Bixie\Framework\Calculation;


use Bixie\Framework\Traits\JsonSerializableTrait;

class Price {

    use JsonSerializableTrait;

    public $min_quantity = 1;

    public $max_quantity = 1;

    public $price = 0;

    public $currency = 'EUR';

}