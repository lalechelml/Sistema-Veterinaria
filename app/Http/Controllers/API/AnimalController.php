<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Animal;
use App\Models\Propietario;

class AnimalController extends Controller
{

    public function propietario()
    {
        $data = Propietario::get();

        $response['data'] = $data;
        $response['succes'] = true;

        return $response;
    }

    public function list()
    {
        try {
            $data = Animal::with("propietario", "atenciones")->get();
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
            $insert['pro_id'] = $request['propietario'];
            $insert['ani_nombre'] = $request['nombre'];
            $insert['ani_especie'] = $request['especie'];
            $insert['ani_raza'] = $request['raza'];
            $insert['ani_color'] = $request['color'];
            $insert['ani_fecha_nacimiento'] = $request['fecha_nacimiento'];
            $insert['ani_genero'] = $request['genero'];
            Animal::insert($insert);
            $response['message'] = "Animal Registrado";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function get($id)
    {

        try {

            $data = Animal::with("propietario")->find($id);

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
            $data['pro_id'] = $request['propietario'];
            $data['ani_nombre'] = $request['nombre'];
            $data['ani_especie'] = $request['especie'];
            $data['ani_raza'] = $request['raza'];
            $data['ani_color'] = $request['color'];
            $data['ani_fecha_nacimiento'] = $request['fecha_nacimiento'];
            $data['ani_genero'] = $request['genero'];

            Animal::where("ani_id", $id)->update($data);
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
            Animal::where("ani_id", $id)->delete();
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
