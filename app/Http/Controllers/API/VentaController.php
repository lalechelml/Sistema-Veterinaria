<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Venta;
use DebugBar\DebugBar;
use Illuminate\Http\Request;

class VentaController extends Controller
{
    public function list()
    {
        try {
            $data = Venta::with("propietario", "usuario", "detalles")->get();

            $ids = Venta::all()->pluck('ven_numero_comprobante');
            $response['numeroComprobante'] = (string)(intval($ids[sizeof($ids) - 1]) + 1);

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
            $insert['usu_id'] = $request['usuario'];
            $insert['pro_id'] = $request['propietario'];
            $insert['ven_numero_comprobante'] = $request['numeroComprobante'];
            $insert['ven_tipo_comprobante'] = $request['tipoComprobante'];
            $insert['ven_fecha_hora'] = $request['fechaHora'];
            $insert['ven_impuesto'] = $request['impuesto'];
            $insert['ven_total_venta'] = $request['ventaTotal'];

            Venta::insert($insert);


            $ids = Venta::all()->pluck('ven_id');
            $response['id'] = $ids[sizeof($ids) - 1];
            $response['message'] = "Venta Registrada";
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

            $data = Venta::with("propietario", "usuario", "detalles.producto", "detalles.atencion")->find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Cargado con exíto";
                $response['success'] = true;
            } else {
                $response['message'] = "No se encontro la Venta de id $id";
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
            $data['usu_id'] = $request['usuario'];
            $data['pro_id'] = $request['propietario'];
            $data['ven_numero_comprobante'] = $request['numeroComprobante'];
            $data['ven_tipo_comprobante'] = $request['tipoComprobante'];
            $data['ven_fecha_hora'] = $request['fechaHora'];
            $data['ven_impuesto'] = $request['impuesto'];
            $data['ven_total_venta'] = $request['ventaTotal'];

            Venta::where("ven_id", $id)->update($data);

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
            Venta::where("ven_id", $id)->delete();
            $response['message'] = "Se eliminó correctamente";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
