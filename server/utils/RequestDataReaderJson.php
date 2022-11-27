<?php

class RequestDataReaderJson implements ArrayAccess {
    private array $data;

    public function __construct() {
        $stuffInTerribleFormat = file_get_contents('php://input');
        $this->data = json_decode($stuffInTerribleFormat, true) ?? [];
    }

    public function __get($property) {
        return $this->data[$property] ?? null;
    }

    public function offsetExists(mixed $offset): bool {
        return isset($this->data[$offset]);
    }

    public function offsetGet(mixed $offset): mixed {
        return $this->data[$offset];
    }

    public function offsetSet(mixed $offset, mixed $value): void {
        throw new Exception('RequestDataReaderJson->OffsetSet() is not implemented.');
    }

    public function offsetUnset(mixed $offset): void {
        throw new Exception('RequestDataReaderJson->OffsetUnset() is not implemented.');
    }
}