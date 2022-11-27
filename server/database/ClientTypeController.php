<?php

namespace controller;

use Answer;
use DB;
use Utils;

abstract class ClientTypeController {
    private const TYPE = 'client_type';
    private const ID = 'id_client_type';

    private const sqlAll = 'SELECT * FROM client_type;';

    static public function echoClientTypes(): void {
        $clientTypes = DB::queryGetAll(sql: self::sqlAll);
        foreach ($clientTypes as $clientType) Utils::numberify($clientType[self::ID]);
        Answer::ok()::sendAsJson($clientTypes);
    }

}