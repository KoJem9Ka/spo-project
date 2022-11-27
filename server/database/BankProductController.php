<?php

namespace controller;

use Answer;
use DB;
use ESqlSearchByType;
use Utils;

abstract class BankProductController {
    private const ID = 'id_bank_product';
    private const TITLE = 'title';
    private const DESCRIPTION = 'description';
    private const IMAGE = 'image';
    private const ID_CLIENT_TYPE = 'id_client_type';
    private const CLIENT_TYPE = 'client_type';
    private const PRICE = 'tariff_price_rub';

    static public function echoProducts(): never {
        ['where' => $where, 'params' => $params] = Utils::generateSqlWhereWithParams([
            self::ID => ESqlSearchByType::EQUAL,
            self::ID_CLIENT_TYPE => ESqlSearchByType::EQUAL,

            self::TITLE => ESqlSearchByType::TEXT,
            self::DESCRIPTION => ESqlSearchByType::TEXT,
            self::CLIENT_TYPE => ESqlSearchByType::TEXT,

            self::PRICE => ESqlSearchByType::NUMERIC_RANGES,
        ]);

        $products = DB::queryGetAll(sql: self::sqlProducts(where: $where), params: $params);
        foreach ($products as &$product) self::productMiddleware($product);
        Answer::ok()::sendAsJson($products);
    }

    static private function sqlProducts(string $where): string {
        $where = empty($where) ? '' : "WHERE $where";
        return "
            SELECT id_bank_product,
                   title,
                   description,
                   image,
                   ct.id_client_type,
                   client_type,
                   tariff_price_rub
            FROM bank_product bp
                     JOIN client_type ct ON ct.id_client_type = bp.id__client_type
            $where
            ORDER BY id_bank_product;
        ";
    }

    static private function productMiddleware(&$product): void {
        Utils::imageFileWrapLink(imageName: $product[self::IMAGE]);
        Utils::numberify(variable: $product[self::ID]);
        Utils::numberify(variable: $product[self::ID_CLIENT_TYPE]);
        Utils::floatify(variable: $product[self::PRICE]);
    }

    static public function echoProductById(string $id): void {
        if (is_numeric($id) &&
            $product = DB::queryGetFirst(sql: self::sqlProducts(where: self::ID . ' = $1'), params: [$id])
        ) {
            self::productMiddleware($product);
            Answer::ok()::sendAsJson($product);
        } else Answer::notFound();
    }
}