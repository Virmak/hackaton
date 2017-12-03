<?php

namespace Virmak\Controllers;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Virmak\Models\Comment;

class CommentController extends Controller
{
    public function create(RequestInterface $request, ResponseInterface $response)
    {
        $comment = new Comment();

        $comment->user_id = $request->getParam('user_id');
        $comment->event_id = $request->getParam('event_id');
        $comment->message = $request->getParam('message');

        $comment->save();

        return '{"result": "success"}';
    }
}