<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Medico;
use Illuminate\Http\Request;

class MedicoController extends Controller
{
    public function list()
    {

        try {

            $data = Medico::get();
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
            $insert['med_dni'] = $request['dni'];
            $insert['med_nombre'] = $request['nombre'];
            $insert['med_apellidos'] = $request['apellidos'];
            $insert['med_telefono'] = $request['telefono'];
            $insert['med_email'] = $request['email'];
            $insert['med_genero'] = $request['genero'];
            $insert['med_fecha_nacimiento'] = $request['fecha_nacimiento'];

            Medico::insert($insert);

            $response['message'] = "Medico Registrado";
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

            $data = Medico::find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Cargado con exíto";
                $response['success'] = true;
            } else {
                $response['message'] = "No se encontro el medico de id $id";
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
            $data['med_dni'] = $request['dni'];
            $data['med_nombre'] = $request['nombre'];
            $data['med_apellidos'] = $request['apellidos'];
            $data['med_telefono'] = $request['telefono'];
            $data['med_email'] = $request['email'];
            $data['med_genero'] = $request['genero'];
            $data['med_fecha_nacimiento'] = $request['fecha_nacimiento'];

            Medico::where("med_id", $id)->update($data);

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
            Medico::where("med_id", $id)->delete();
            $response['message'] = "Se eliminó correctamente";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
