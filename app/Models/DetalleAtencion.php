<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetalleAtencion extends Model
{
    use HasFactory;

    protected $table = 'detalle_atencion';
    protected $primaryKey = 'deta_id';
    public $timestamps = false;

    protected $fillable = [
        'ate_id', 'enf_id', 'prod_id', 'deta_dosis'
    ];

    public function atencion()
    {
        return $this->belongsTo(AtencionMedica::class, 'ate_id');
    }

    public function enfermedad()
    {
        return $this->belongsTo(Enfermedades::class, 'enf_id');
    }

    public function producto()
    {
        return $this->belongsTo(Producto::class, 'prod_id');
    }
}
