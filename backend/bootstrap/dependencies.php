<?php

$container = $app->getContainer();


$capsule = new \Illuminate\Database\Capsule\Manager();
$capsule->addConnection($container['settings']['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$container['db'] = function ($container) use ($capsule) {
return $capsule;
};

$container['HomeController'] = function ($container) {
    return new \Virmak\Controllers\HomeController($container);
};

$container['UserController'] = function ($container) {
    return new \Virmak\Controllers\UserController($container);
};





