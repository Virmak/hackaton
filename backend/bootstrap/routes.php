<?php


use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->get('/hello/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});

$app->get('/', 'HomeController:index')->setName('Home');

$app->post('/user/get', 'UserController:read')->setName('ReadUser');
$app->post('/user/create', 'UserController:create')->setName('CreateUser');
$app->post('/user/update', 'UserController:update')->setName('UpdateUser');

$app->post('/event/create', 'EventController:create')->setName('CreateEvent');
$app->post('/event/all', 'EventController:all');