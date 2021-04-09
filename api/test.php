<?php
class Test {

    private int $valueA;
    private int $valueB;

    
    public function __construct(int $valueA, int $valueB) {
        $this->valueA = $valueA;
        $this->valueB = $valueB;
    }

    public function sum() {
        return $this->valueA + $this->valueB;
    }
}

$test = new Test(5,2);
echo $test->sum();