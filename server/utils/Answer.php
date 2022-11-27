<?php


abstract class StatusCode {
    const OK = 200;
    const CREATED = 201;
    const BAD_REQUEST = 400;
    const NOT_FOUND = 404;
    const NOT_ACCEPTABLE = 406;
    const SERVICE_UNAVAILABLE = 503;
}

abstract class StatusMessage {
    const OK = 'OK';
    const CREATED = 'Created';
    const BAD_REQUEST = 'Bad Request';
    const NOT_FOUND = 'Not Found';
    const NOT_ACCEPTABLE = 'Not Acceptable';
    const SERVICE_UNAVAILABLE = 'Service Unavailable';
}

class Answer {
    static public function ok(): Answer {
        http_response_code(StatusCode::OK);
        return new Answer();
    }

    static public function sendBytedPNG($filePathName): never {
        !is_file($filePathName) && self::notFound();
        header("Content-Type: image/png");
        header("Content-Length: " . filesize($filePathName));
        $fp = fopen($filePathName, 'rb');
        fpassthru($fp);
        fclose($fp);
        die();
    }

    static public function notFound(string $message = StatusMessage::NOT_FOUND): never {
        self::echoStatus(status: StatusCode::NOT_FOUND, message: $message);
    }

    static public function echoStatus(?int $status = StatusCode::OK, ?string $message = StatusMessage::OK, ?int $id = null): never {
        http_response_code($status);

        self::sendAsJson(array_filter([
            'status' => $status,
            'message' => $message,
            'id' => $id,
        ], fn($el) => !empty($el)));
    }

    static public function sendAsJson(mixed $anything = null): never {
        header('Content-Type: application/json; charset=utf-8');
        isset($anything) && print json_encode($anything);
        die();
    }

    static public function clientError(int $status = StatusCode::BAD_REQUEST, string $message = StatusMessage::BAD_REQUEST): never {
        self::echoStatus(status: $status, message: $message);
    }
}