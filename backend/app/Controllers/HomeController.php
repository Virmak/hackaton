<?php

namespace Virmak\Controllers;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class HomeController extends Controller
{
    public function index(RequestInterface $request, ResponseInterface $response)
    {
        return '
        <form method="post" action="./event/create">
            <input type="hidden" name="isLogin" value="1">
            <input type="text" name="event_name">
            <input type="text" name="start_date">
            <input type="text" name="location">
            <input type="text" name="description">
            <input type="text" name="user_id">
            <input type="submit">
        </form>
        ';
    }
}