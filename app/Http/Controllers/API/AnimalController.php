<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Animal;
use App\Models\Cliente;
use App\Models\Medico;

class AnimalController extends Controller
{
  public function listar()
  {
    $data = Animal::get();

    $response['data'] = $data;
    $response['succes'] = true;

    return $response;
  }


  public function cliente()
  {
    $data = Cliente::get();

    $response['data'] = $data;
    $response['succes'] = true;

    return $response;
  }

  public function list()
  {

    try {
      $data = Animal::with("cliente.usuario", "medico.usuario")->get();
      $response['data'] = $data;
      $response['success'] = true;
    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['success'] = false;
    }
    return $response;
  }

  public function create(Request $request)
  {
    try {
      $insert['id_cliente'] = $request['cliente'];
      $insert['id_medico'] = $request['medico'];
      $insert['nombre'] = $request['nombre'];
      $insert['especie'] = $request['especie'];
      $insert['raza'] = $request['raza'];
      $insert['color'] = $request['color'];
      $insert['fecha_nacimiento'] = $request['fecha_nacimiento'];
      $insert['genero'] = $request['genero'];

      Animal::insert($insert);

      $response['message'] = "Animal Registrado";
      $response['succes'] = true;
    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['succes'] = false;
    }

    return $response;
  }

  public function get($id)
  {

    try {

      $data = Animal::with("cliente.usuario", "medico.usuario")->find($id);

      if ($data) {
        $response['data'] = $data;
        $response['message'] = "Cargado con exíto";
        $response['success'] = true;
      } else {
        $response['message'] = "No se encontro el animal de id $id";
        $response['success'] = false;
      }
    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['success'] = false;
    }
    return $response;
  }


  public function update(Request $request, $id)
  {
    try {
      $data['id_cliente'] = $request['cliente'];
      $data['id_medico'] = $request['medico'];
      $data['nombre'] = $request['nombre'];
      $data['especie'] = $request['especie'];
      $data['raza'] = $request['raza'];
      $data['color'] = $request['color'];
      $data['fecha_nacimiento'] = $request['fecha_nacimiento'];
      $data['genero'] = $request['genero'];

      Animal::where("id_animal", $id)->update($data);

      $response['message'] = "Se actualizó correctamente";
      $response['success'] = true;
    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['success'] = false;
    }
    return $response;
  }


  public function delete($id)
  {

    try {
      Animal::where("id_animal", $id)->delete();
      // $res = Animal::where("id_animal", $id)->delete();
      // $response['res'] = $res;
      $response['message'] = "Se eliminó correctamente";
      $response['success'] = true;
    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['success'] = false;
    }

    return $response;
  }
}
