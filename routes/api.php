<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/animales/clientes', 'App\Http\Controllers\API\AnimalController@listar');
Route::post('/animales/agregar', 'App\Http\Controllers\API\AnimalController@create');
Route::post('/animales/dueño', 'App\Http\Controllers\API\AnimalController@cliente');
Route::get('/animales/listar', 'App\Http\Controllers\API\AnimalController@list');
Route::get('/animales/get/{id}', 'App\Http\Controllers\API\AnimalController@get');
Route::put('/animales/actualizar/{id}', 'App\Http\Controllers\API\AnimalController@update');
Route::delete('/animales/eliminar/{id}', 'App\Http\Controllers\API\AnimalController@delete');
