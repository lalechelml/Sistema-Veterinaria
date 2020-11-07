<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Servicios;
use Illuminate\Http\Request;

class ServiciosController extends Controller
{
    function list()
    {

        $data = Servicios::get();

        $response['data'] = $data;
        $response['succes'] = true;

        return $response;
    }



    public function create(Request $request)
    {
        try {
            $insert['ser_nombre'] = $request['nombre'];
            $insert['ser_precio'] = $request['precio'];

            Servicios::insert($insert);

            $response['message'] = "Servicio Registrada";
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

            $data = Servicios::find($id);

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
            $data['ser_nombre'] = $request['nombre'];
            $data['ser_precio'] = $request['precio'];

            Servicios::where("ser_id", $id)->update($data);

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
            Servicios::where("ser_id", $id)->delete();
            $response['message'] = "Se eliminó correctamente";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
