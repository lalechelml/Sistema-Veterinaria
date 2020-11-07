<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\DetalleAtencion;
use Illuminate\Http\Request;

class DetalleAtencionController extends Controller
{
    public function list()
    {
        try {
            $data = DetalleAtencion::with("atencion", "enfermedad", "producto")->get();
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
            \Debugbar::info($request);
            $insert['ate_id'] = $request['atencion'];
            $insert['enf_id'] = $request['enfermedad'];
            $insert['prod_id'] = $request['producto'];
            $insert['deta_dosis'] = $request['dosis'];

            DetalleAtencion::insert($insert);

            $response['message'] = "Detalle Registrado";
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

            $data = DetalleAtencion::with("atencion", "enfermedad", "producto")->find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Cargado con exíto";
                $response['success'] = true;
            } else {
                $response['message'] = "No se encontro el DetalleAtencion de id $id";
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
            $data['ate_id'] = $request['atencion'];
            $data['enf_id'] = $request['enfermdedad'];
            $data['prod_id'] = $request['servicio'];
            $data['deta_dosis'] = $request['dosis'];

            DetalleAtencion::where("deta_id", $id)->update($data);

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
            DetalleAtencion::where("deta_id", $id)->delete();
            $response['message'] = "Se eliminó correctamente";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
