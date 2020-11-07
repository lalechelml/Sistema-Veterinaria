<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Enfermedades;
use Illuminate\Http\Request;

class EnfermedadesController extends Controller
{
    function list()
    {

        $data = Enfermedades::get();

        $response['data'] = $data;
        $response['succes'] = true;

        return $response;
    }



    public function create(Request $request)
    {
        try {
            $insert['enf_nombre'] = $request['nombre'];
            $insert['enf_descripcion'] = $request['descripcion'];

            Enfermedades::insert($insert);

            $response['message'] = "Enfermedad Registrada";
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

            $data = Enfermedades::find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Cargado con exíto";
                $response['success'] = true;
            } else {
                $response['message'] = "No se encontro el registro de id $id";
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
            $data['enf_nombre'] = $request['nombre'];
            $data['enf_descripcion'] = $request['descripcion'];

            Enfermedades::where("enf_id", $id)->update($data);

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
            Enfermedades::where("enf_id", $id)->delete();
            $response['message'] = "Se eliminó correctamente";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
