<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    use HasFactory;
    protected $table = 'venta';
    protected $primaryKey = 'ven_id';
    public $timestamps = false;

    protected $fillable = [
        'asu_id', 'pro_id', 'ven_numero_comprobante',
        'ven_tipo_comprobante', 'ven_fecha_hora', 'ven_impuesto', 'ven_total_venta'
    ];
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usu_id');
    }
    public function propietario()
    {
        return $this->belongsTo(Propietario::class, 'pro_id');
    }
    public function detalles()
    {
        return $this->hasMany(DetalleVenta::class, 'ven_id');
    }
}
