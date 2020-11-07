<?php

namespace App\Http\Controllers\API;;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Producto;
use App\Models\CategoriaProd;

use Illuminate\Support\Facades\Storage;

class ProductoController extends Controller
{

    public function imagen(Request $request)
    {
        if (isset($request->cargado)) {
            $imagen = $request->imagen;
            $imagen->store('public/productos');
        }
    }

    public function categoria()
    {
        $data = CategoriaProd::get();

        $response['data'] = $data;
        $response['succes'] = true;

        return $response;
    }

    public function list()
    {
        try {
            $data = Producto::with("categoria")->get();
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
            $producto = Producto::create([
                "catp_id" => $request->categoria,
                "prod_codigo" => $request->codigo,
                "prod_nombre" => $request->nombre,
                "prod_stock" => $request->stock,
                "prod_descripcion" => $request->descripcion,
            ] + $request->all());

            if ($request->hasFile('imagen')) {

                $imagen = $request->imagen->store('public/productos');
                $url = Storage::url($imagen);
                $producto->prod_imagen =  asset('') . substr($url, 1);
                $producto->save();
            }

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


    public function update(Request $request)
    {

        try {
            $data['catp_id'] = $request['categoria'];
            $data['prod_codigo'] = $request['codigo'];
            $data['prod_nombre'] = $request['nombre'];
            $data['prod_stock'] = $request['stock'];
            $data['prod_descripcion'] = $request['descripcion'];
            if ($request->hasFile('imagen')) {
                // ---------
                $image = Producto::find($request->id);
                $path = str_replace(asset('') . 'storage', "\\public", $image->prod_imagen);
                Storage::delete($path);
                // -----------
                $imagen = $request->imagen->store('public/productos');
                $url = Storage::url($imagen);
                $data['prod_imagen'] =  asset('') . substr($url, 1);
            }

            Producto::where("prod_id", $request->id)->update($data);

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

            $data = Producto::find($id);
            $data->prod_imagen;

            if ($data->prod_imagen) {
                $path = str_replace(asset('') . 'storage', "\\public", $data->prod_imagen);
                Storage::delete($path);
            }

            Producto::where("prod_id", $id)->delete();
            $response['message'] = "Se eliminó correctamente";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
