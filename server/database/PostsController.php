<?php

namespace controller;

use Answer;
use DB;
use StatusCode;

class Post {
    public int $id;
    public string $title;
    public string $content;
}

abstract class PostsController {
    static public function echoPosts(): void {
        $posts = DB::queryGetAll(sql: "SELECT * FROM posts;");
        Answer::ok()::sendAsJson($posts);
    }

    static public function echoPost(int $id): void {
        $post = DB::queryGetFirst(sql: 'SELECT * FROM posts WHERE id = $1', params: [(string)$id]);
        $post ? Answer::ok()::sendAsJson($post) : Answer::notFound();
    }

    static public function insertPostEchoId(string $title, string $content): void {
        $error = [];
        empty($title) && $error[] = 'Title is required.'
            || !is_string($title) && $error[] = 'Title must be of type string.';
        empty($content) && $error[] = 'Content is required.'
            || !is_string($content) && $error[] = 'Content must be of type string.';;

        if (!empty($error)) {
            Answer::clientError(
                status: StatusCode::NOT_ACCEPTABLE,
                message: implode(separator: ' ', array: $error)
            );
        }

        $id = DB::queryGetFirst(sql: 'INSERT INTO posts (title, content) values ($1, $2) RETURNING id', params: [$title, $content])['id'];
        echo $id;
    }
}