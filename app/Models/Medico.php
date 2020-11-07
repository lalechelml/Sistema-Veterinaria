<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    use HasFactory;

    protected $table = 'medico';
    protected $primaryKey = 'med_id';
    public $timestamps = false;

    protected $fillable = [
        'med_dni', 'med_nombre', 'med_apellidos', 'med_telefono', 'med_email', 'med_genero', 'med_fecha_nacimiento'
    ];
}
