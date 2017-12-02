<?php

require dirname(__DIR__) . '/vendor/autoload.php';


$app = new \Slim\App;

//Dependencies
require __DIR__ . '/dependencies.php';

//Routes
require __DIR__ . '/routes.php';