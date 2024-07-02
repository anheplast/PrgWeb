<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

//Controller UNO
$routes->get('/ejercicio1', 'controlleruno::metodo1');
$routes->get('/ejercicio2', 'controlleruno::metodo2');

//Controller DOS
$routes->get('/ejercicio3', 'controllerdos::metodo3');
$routes->get('/ejercicio4', 'controllerdos::metodo4');
