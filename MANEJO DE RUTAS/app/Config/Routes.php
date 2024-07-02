<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

 $routes->get('/catalogo', 'Catalogo::home');



 $routes->get('/zapatos/(:any)', 'Categorias::categoriaZapatos/$1');
 $routes->get('/vestidos/(:any)', 'Categorias::categoriaVestidos/$1');


 $routes->get('/(:any)', 'Catalogo::catalogo/$1');
