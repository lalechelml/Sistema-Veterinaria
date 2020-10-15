<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Producto;

class ProductoController extends Controller
{

    public function list($query)
    {

        try {
            if ($query != "-" && $query != "") {
                $data = Producto::where('prod_nombre', 'LIKE', $query . "%")->with("categoria")->get();
            } else {
                $data = Producto::with("categoria")->get();
            }
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
            $insert['catp_id'] = $request['categoria'];
            $insert['prod_codigo'] = $request['codigo'];
            $insert['prod_nombre'] = $request['nombre'];
            $insert['prod_stock'] = $request['stock'];
            $insert['prod_descripcion'] = $request['descripcion'];
            $insert['prod_imagen'] = $request['imagen'];

            Producto::insert($insert);

            $response['message'] = "Producto Registrado";
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

            $data = Producto::with("categoria")->find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Cargado con exíto";
                $response['success'] = true;
            } else {
                $response['message'] = "No se encontro el Producto de id $id";
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

            $data['catp_id'] = $request['categoria'];
            $data['prod_codigo'] = $request['codigo'];
            $data['prod_nombre'] = $request['nombre'];
            $data['prod_stock'] = $request['stock'];
            $data['prod_descripcion'] = $request['descripcion'];
            $data['prod_imagen'] = $request['imagen'];

            Producto::where("prod_id", $id)->update($data);

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
            Producto::where("prod_id", $id)->delete();
            // $res = Producto::where("id_Producto", $id)->delete();
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
