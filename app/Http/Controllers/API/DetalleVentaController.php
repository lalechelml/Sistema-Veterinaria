<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\DetalleVenta;
use Illuminate\Http\Request;

class DetalleVentaController extends Controller
{
    public function list()
    {
        try {
            $data = DetalleVenta::with("producto", "venta", "atencion")->get();
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
            $insert['ven_id'] = $request['venta'];
            $insert['ate_id'] = $request['atencion'];
            $insert['prod_id'] = $request['producto'];
            $insert['detv_cantidad'] = $request['cantidad'];
            $insert['detv_precio_venta'] = $request['precioVenta'];
            $insert['detv_descuento'] = $request['descuento'];

            DetalleVenta::insert($insert);

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

            $data = DetalleVenta::with("producto", "venta", "atencion")->find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Cargado con exíto";
                $response['success'] = true;
            } else {
                $response['message'] = "No se encontro el DetalleVenta de id $id";
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
            $data['ven_id'] = $request['venta'];
            $data['prod_id'] = $request['producto'];
            $data['detv_cantidad'] = $request['cantidad'];
            $data['detv_precio_venta'] = $request['precioVenta'];
            $data['detv_descuento'] = $request['descuento'];

            DetalleVenta::where("detv:id", $id)->update($data);

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
            DetalleVenta::where("detv:id", $id)->delete();
            $response['message'] = "Se eliminó correctamente";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
