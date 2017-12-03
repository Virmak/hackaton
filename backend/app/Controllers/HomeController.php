<?php

namespace Virmak\Controllers;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class HomeController extends Controller
{
    public function index(RequestInterface $request, ResponseInterface $response)
    {
        return '
        <form method="post" action="./user/update">
            <input type="hidden" name="isLogin" value="1">
            <input type="text" name="username">
            <input type="text" name="password">
            <input type="text" name="email">
            <input type="text" name="first_name">
            <input type="text" name="last_name">
            <input type="text" name="birth_date">
            
            <input type="text" name="address">
            <input type="text" name="role">
            <input type="submit">
        </form>
        ';
    }
}