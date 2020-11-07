<?php

use App\Models\Enfermedades;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/animales/propietarios', 'App\Http\Controllers\API\AnimalController@propietario');


Route::post('/animales/agregar', 'App\Http\Controllers\API\AnimalController@create');
Route::get('/animales/listar', 'App\Http\Controllers\API\AnimalController@list');
Route::get('/animales/get/{id}', 'App\Http\Controllers\API\AnimalController@get');
Route::put('/animales/actualizar/{id}', 'App\Http\Controllers\API\AnimalController@update');
Route::delete('/animales/eliminar/{id}', 'App\Http\Controllers\API\AnimalController@delete');

// ------ Productos
Route::get('/productos/categorias', 'App\Http\Controllers\API\ProductoController@categoria');

Route::post('/productos/agregar', 'App\Http\Controllers\API\ProductoController@create');
Route::get('/productos/listar', 'App\Http\Controllers\API\ProductoController@list');
Route::get('/productos/get/{id}', 'App\Http\Controllers\API\ProductoController@get');
Route::post('/productos/actualizar', 'App\Http\Controllers\API\ProductoController@update');
Route::delete('/productos/eliminar/{id}', 'App\Http\Controllers\API\ProductoController@delete');

// -------------------Propietarios----

Route::post('/propietarios/agregar', 'App\Http\Controllers\API\PropietarioController@create');
Route::get('/propietarios/listar', 'App\Http\Controllers\API\PropietarioController@list');
Route::get('/propietarios/get/{id}', 'App\Http\Controllers\API\PropietarioController@get');
Route::put('/propietarios/actualizar/{id}', 'App\Http\Controllers\API\PropietarioController@update');
Route::delete('/propietarios/eliminar/{id}', 'App\Http\Controllers\API\PropietarioController@delete');

// -------------------------Categorias
Route::post('/categorias/agregar', 'App\Http\Controllers\API\CategoriaProdController@create');
Route::get('/categorias/listar', 'App\Http\Controllers\API\CategoriaProdController@list');
Route::get('/categorias/get/{id}', 'App\Http\Controllers\API\CategoriaProdController@get');
Route::put('/categorias/actualizar/{id}', 'App\Http\Controllers\API\CategoriaProdController@update');
Route::delete('/categorias/eliminar/{id}', 'App\Http\Controllers\API\CategoriaProdController@delete');

// -------------------Medicos
Route::post('/medicos/agregar', 'App\Http\Controllers\API\MedicoController@create');
Route::get('/medicos/listar', 'App\Http\Controllers\API\MedicoController@list');
Route::get('/medicos/get/{id}', 'App\Http\Controllers\API\MedicoController@get');
Route::put('/medicos/actualizar/{id}', 'App\Http\Controllers\API\MedicoController@update');
Route::delete('/medicos/eliminar/{id}', 'App\Http\Controllers\API\MedicoController@delete');

// ------------Enfermedades

Route::post('/enfermedades/agregar', 'App\Http\Controllers\API\EnfermedadesController@create');
Route::get('/enfermedades/listar', 'App\Http\Controllers\API\EnfermedadesController@list');
Route::get('/enfermedades/get/{id}', 'App\Http\Controllers\API\EnfermedadesController@get');
Route::put('/enfermedades/actualizar/{id}', 'App\Http\Controllers\API\EnfermedadesController@update');
Route::delete('/enfermedades/eliminar/{id}', 'App\Http\Controllers\API\EnfermedadesController@delete');

// --------------Servicios

Route::post('/servicios/agregar', 'App\Http\Controllers\API\ServiciosController@create');
Route::get('/servicios/listar', 'App\Http\Controllers\API\ServiciosController@list');
Route::get('/servicios/get/{id}', 'App\Http\Controllers\API\ServiciosController@get');
Route::put('/servicios/actualizar/{id}', 'App\Http\Controllers\API\ServiciosController@update');
Route::delete('/servicios/eliminar/{id}', 'App\Http\Controllers\API\ServiciosController@delete');


// ----------------- Atención médica

Route::post('/atencion/agregar', 'App\Http\Controllers\API\AtencionMedicaController@create');
Route::get('/atencion/listar', 'App\Http\Controllers\API\AtencionMedicaController@list');
Route::get('/atencion/get/{id}', 'App\Http\Controllers\API\AtencionMedicaController@get');
Route::put('/atencion/actualizar/{id}', 'App\Http\Controllers\API\AtencionMedicaController@update');
Route::delete('/atencion/eliminar/{id}', 'App\Http\Controllers\API\AtencionMedicaController@delete');

// -------------------- Detalle de Atención

Route::post('/detalleAtencion/agregar', 'App\Http\Controllers\API\DetalleAtencionController@create');
Route::get('/detalleAtencion/listar', 'App\Http\Controllers\API\DetalleAtencionController@list');
Route::get('/detalleAtencion/get/{id}', 'App\Http\Controllers\API\DetalleAtencionController@get');
Route::put('/detalleAtencion/actualizar/{id}', 'App\Http\Controllers\API\DetalleAtencionController@update');
Route::delete('/detalleAtencion/eliminar/{id}', 'App\Http\Controllers\API\DetalleAtencionController@delete');

// ---------------- Ventas

Route::post('/ventas/agregar', 'App\Http\Controllers\API\VentaController@create');
Route::get('/ventas/listar', 'App\Http\Controllers\API\VentaController@list');
Route::get('/ventas/get/{id}', 'App\Http\Controllers\API\VentaController@get');
Route::put('/ventas/actualizar/{id}', 'App\Http\Controllers\API\VentaController@update');
Route::delete('/ventas/eliminar/{id}', 'App\Http\Controllers\API\VentaController@delete');

// ---------------- Detalle venta

Route::post('/detallesVenta/agregar', 'App\Http\Controllers\API\DetalleVentaController@create');
Route::get('/detallesVenta/listar', 'App\Http\Controllers\API\DetalleVentaController@list');
Route::get('/detallesVenta/get/{id}', 'App\Http\Controllers\API\DetalleVentaController@get');
Route::put('/detallesVenta/actualizar/{id}', 'App\Http\Controllers\API\DetalleVentaController@update');
Route::delete('/detallesVenta/eliminar/{id}', 'App\Http\Controllers\API\DetalleVentaController@delete');
