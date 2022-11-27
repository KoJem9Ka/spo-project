<?php


use controller\{BankProductController, ClientTypeController, PostsController};

require_once 'utils/imports.php';

$params = array_slice(array: explode(separator: "/", string: $_SERVER['REQUEST_URI']), offset: 1);
$method = $_SERVER['REQUEST_METHOD'] ?? null;
$type = $params[0] ?? null;

$router = [
    'products' => [
        'POST' => function () use ($params) {
            if (isset($params[1]) && is_numeric($params[1]) && empty($params[2]))
                BankProductController::echoProductById($params[1]);
            elseif (empty($params[1]))
                BankProductController::echoProducts();
            else Answer::notFound();
        },
    ],
    'client_types' => [
        'GET' => function () {
            ClientTypeController::echoClientTypes();
        }
    ],
    // The posts aren't related to my variant, it's here because I've been practicing on it.
    'posts' => [
        'GET' => function () use ($params) {
            if (isset($params[1]) && is_numeric($params[1]) && empty($params[2]))
                PostsController::echoPost($params[1]);
            elseif (empty($params[1]))
                PostsController::echoPosts();
            else Answer::notFound();
        },
        'POST' => function () use ($params) {
            $data = new RequestDataReaderJson();
            PostsController::insertPostEchoId(title: $data['title'], content: $data['content']);
        },
    ],
    'images' => function () {
        $filesPath = is_dir('../data/server_files/') ? '../data/server_files/' : 'files/';
        $filePathName = $filesPath . $_SERVER['REQUEST_URI'];
        Answer::sendBytedPNG(filePathName: $filePathName);
    },
];

if ($method === 'OPTIONS') die();
elseif (isset($router[$type]) && is_callable($router[$type]))
    $router[$type]();
elseif (isset($router[$type][$method]) && is_callable($router[$type][$method]))
    $router[$type][$method]();
else Answer::notFound();
