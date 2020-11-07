<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AtencionMedica;
use Illuminate\Http\Request;

class AtencionMedicaController extends Controller
{
    public function list()
    {
        try {
            $data = AtencionMedica::with("detalles", "animal", "medico", "servicio")->get();
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
            $insert['ani_id'] = $request['animal'];
            $insert['med_id'] = $request['medico'];
            $insert['ser_id'] = $request['servicio'];
            $insert['ate_fecha_hora'] = $request['fechaHora'];
            $insert['ate_diagnostico'] = $request['diagnostico'];

            AtencionMedica::insert($insert);


            $ids = AtencionMedica::all()->pluck('ate_id');
            $response['id'] = $ids[sizeof($ids) - 1];

            $response['message'] = "Atencion Medica Registrada";
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

            $data = AtencionMedica::with("animal", "medico", "servicio", "detalles.producto", "detalles.enfermedad")->find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Cargado con exíto";
                $response['success'] = true;
            } else {
                $response['message'] = "No se encontro el AtencionMedica de id $id";
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
            $data['ani_id'] = $request['animal'];
            $data['med_id'] = $request['medico'];
            $data['ser_id'] = $request['servicio'];
            $data['ate_fecha_hora'] = $request['fechaHora'];
            $data['ate_diagnostico'] = $request['diagnostico'];

            AtencionMedica::where("ate_id", $id)->update($data);

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
            AtencionMedica::where("ate_id", $id)->delete();
            $response['message'] = "Se eliminó correctamente";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
