<?php

require dirname(__DIR__) . '/vendor/autoload.php';


$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true,
        'db' => [
            'driver' => 'mysql',
            'host' => 'localhost',
            'database' => 'hackaton',
            'username' => 'root',
            'password' => '123456',
            'charset' => 'utf8',
            'collation' => 'utf8_unicode_ci',
        ]
    ]
]);


//Dependencies
require __DIR__ . '/dependencies.php';

//Routes
require __DIR__ . '/routes.php';