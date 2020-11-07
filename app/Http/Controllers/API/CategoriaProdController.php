<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\CategoriaProd;

class CategoriaProdController extends Controller
{
    function list()
    {

        $data = CategoriaProd::get();

        $response['data'] = $data;
        $response['succes'] = true;

        return $response;
    }



    public function create(Request $request)
    {
        try {
            $insert['catp_nombre'] = $request['nombre'];
            $insert['catp_descripcion'] = $request['descripcion'];

            CategoriaProd::insert($insert);

            $response['message'] = "Categoria Registrada";
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

            $data = CategoriaProd::find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Cargado con exíto";
                $response['success'] = true;
            } else {
                $response['message'] = "No se encontro el CategoriaProd de id $id";
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
            $data['catp_nombre'] = $request['nombre'];
            $data['catp_descripcion'] = $request['descripcion'];

            CategoriaProd::where("catp_id", $id)->update($data);

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
            CategoriaProd::where("catp_id", $id)->delete();
            $response['message'] = "Se eliminó correctamente";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
