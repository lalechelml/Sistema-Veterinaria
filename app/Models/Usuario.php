<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Medico;

class Usuario extends Model
{
    use HasFactory;

    protected $table = 'usuario';
    protected $primaryKey = 'usu_id';
    public $timestamps = false;

    protected $fillable = [
        'dni',
        'per_id',
        'usu_dni',
        'usu_email',
        'usu_contrasenia',
        'usu_nombres',
        'usu_apellidos',
        'usu_celular',
        'usu_estado'
    ];
}
