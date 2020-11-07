<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AtencionMedica extends Model
{
    use HasFactory;
    protected $table = 'atencion_medica';
    protected $primaryKey = 'ate_id';
    public $timestamps = false;

    protected $fillable = [
        'ani_id', 'med_id', 'ser_id', 'ate_fecha_hora', 'ate_diagnostico'
    ];
    public function animal()
    {
        return $this->belongsTo(Animal::class, 'ani_id');
    }
    public function medico()
    {
        return $this->belongsTo(Medico::class, 'med_id');
    }
    public function servicio()
    {
        return $this->belongsTo(Servicios::class, 'ser_id');
    }
    public function detalles()
    {
        return $this->hasMany(DetalleAtencion::class, 'ate_id');
    }
}
