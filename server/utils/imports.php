<?php

// load .env
//require_once __DIR__ . '/../../vendor/autoload.php';
//$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__ . '/../..');
//$dotenv->safeLoad();
//$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__ . '/../../..');
//$dotenv->safeLoad();
//$dotenv->required([
//    'POSTGRES_HOST',
//    'POSTGRES_PORT',
//    'POSTGRES_USER',
//    'POSTGRES_PASSWORD',
//    'POSTGRES_DB',
//]);

// Other
require_once __DIR__ . '/Utils.php';

// load other custom modules
require_once __DIR__ . '/Answer.php';
require_once __DIR__ . '/RequestDataReaderJson.php';

//Answer::sendAsJson([
//    'POSTGRES_HOST' => getenv('POSTGRES_HOST'),
//    'POSTGRES_PORT' => getenv('POSTGRES_PORT'),
//    'POSTGRES_USER' => getenv('POSTGRES_USER'),
//    'POSTGRES_PASSWORD' => getenv('POSTGRES_PASSWORD'),
//    'POSTGRES_DB' => getenv('POSTGRES_DB'),
//]);

// Database connection AND Controllers
require_once __DIR__ . '/../database/DB.php';
require_once __DIR__ . '/../database/PostsController.php';
require_once __DIR__ . '/../database/BankProductController.php';
require_once __DIR__ . '/../database/ClientTypeController.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');
