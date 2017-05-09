<?php

use Illuminate\Http\Request;
use Dingo\Api\Routing\Router;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/** @var Router $api */
$api = app('Dingo\Api\Routing\Router');


/*
 * v1 API definition...
 */
$api->version('v1', ['namespace' => 'App\Http\Controllers'], function (Router $api) { 
	$api->get('/', function () {
        return ['Blog API is ready'];
    });

	$api->post('blog', 'PostController@store');
});