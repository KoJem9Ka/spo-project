<?php

use PgSql\{Connection, Result};

abstract class DB {
    static private false|Connection $connection = false;

    static public function queryGetFirst(string $sql, array $params = []): false|array {
        return pg_fetch_assoc(self::raw_query_params(sql: $sql, params: $params));
    }

    static private function raw_query_params(string $sql, array $params = []): false|Result {
        self::init();
        return pg_query_params(connection: self::$connection, query: $sql, params: $params);
    }

    static private function init(): void {
        if (!empty(self::$connection)) return;
        try {
            error_reporting(E_ERROR | E_PARSE);
            self::$connection = pg_connect(connection_string: "" .
                "host=" . (getenv('POSTGRES_HOST') ?: 'localhost') . " " .
                "port=" . (getenv('POSTGRES_PORT') ?: '5433') . " " .
                "user=" . (getenv('POSTGRES_USER') ?: 'kojem9ka') . " " .
                "password=" . (getenv('POSTGRES_PASSWORD') ?: '333') . " " .
                "dbname=" . (getenv('POSTGRES_DB') ?: 'alfabank_db')
            );
            if (empty(self::$connection)) throw new Exception();
            error_reporting(E_ALL);
        } catch (Exception $e) {
            Answer::echoStatus(status: StatusCode::SERVICE_UNAVAILABLE, message: 'PostgreSQL database connection failed.');
        }
    }

    static public function queryGetAll(string $sql, array $params = []): array {
        return pg_fetch_all(self::raw_query_params($sql, $params)) ?: [];
    }
}