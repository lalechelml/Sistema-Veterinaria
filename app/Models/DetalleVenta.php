<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetalleVenta extends Model
{
    use HasFactory;
    protected $table = 'detalle_venta';
    protected $primaryKey = 'detv_id';
    public $timestamps = false;

    protected $fillable = [
        'ate_id', 'ven_id', 'prod_id', 'detv_cantidad',
        'detv_precio_venta', 'detv_descuento'
    ];
    public function producto()
    {
        return $this->belongsTo(Producto::class, 'prod_id');
    }
    public function venta()
    {
        return $this->belongsTo(Venta::class, 'ven_id');
    }
    public function atencion()
    {
        return $this->belongsTo(AtencionMedica::class, 'ate_id');
    }
}
