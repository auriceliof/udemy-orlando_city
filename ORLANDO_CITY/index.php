<?php

    require 'inc/Slim-2.x/Slim/Slim.php';

    \Slim\Slim::registerAutoloader();


    $app = new \Slim\Slim();


    // RAIZ
    $app->get(
        '/',
        function () {
            
            require_once("view/index.php");
        }
    );

    //ENTRETENIMENTO
    $app->get(
        '/entretenimento',
        function () {
            
            require_once("view/entretenimento.php");
        }
    );

    //LOJA
    $app->get(
        '/loja',
        function () {
            
            require_once("view/loja.php");
        }
    );

$app->run();
