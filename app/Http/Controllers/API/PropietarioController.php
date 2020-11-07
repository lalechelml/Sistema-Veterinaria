<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Propietario;

class PropietarioController extends Controller
{

    public function list()
    {

        try {

            $data = Propietario::get();
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

            // $propietario = Propietario::created([
            //     "pro_dni" => $request->dni,
            //     "pro_nombre" => $request->nombre,
            //     "pro_apellidos" => $request->apellidos,
            //     "pro_telefono" => $request->telefono,
            //     "pro_email" => $request->email,
            //     "pro_direccion" => $request->direccion,
            //     "pro_ciudad" => $request->ciudad
            // ] + $request->all());

            $insert['pro_dni'] = $request['dni'];
            $insert['pro_nombre'] = $request['nombre'];
            $insert['pro_apellidos'] = $request['apellidos'];
            $insert['pro_telefono'] = $request['telefono'];
            $insert['pro_email'] = $request['email'];
            $insert['pro_direccion'] = $request['direccion'];
            $insert['pro_ciudad'] = $request['ciudad'];

            Propietario::insert($insert);

            $response['message'] = "Propietario Registrado";
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

            $data = Propietario::find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Cargado con exíto";
                $response['success'] = true;
            } else {
                $response['message'] = "No se encontro el propietario de id $id";
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
            $data['pro_dni'] = $request['dni'];
            $data['pro_nombre'] = $request['nombre'];
            $data['pro_apellidos'] = $request['apellidos'];
            $data['pro_telefono'] = $request['telefono'];
            $data['pro_email'] = $request['email'];
            $data['pro_direccion'] = $request['direccion'];
            $data['pro_ciudad'] = $request['ciudad'];

            Propietario::where("pro_id", $id)->update($data);

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
            Propietario::where("pro_id", $id)->delete();
            $response['message'] = "Se eliminó correctamente";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
