<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Medico;

class Usuario extends Model
{
    use HasFactory;

    protected $table = 'usuario';
    protected $primaryKey = 'id_usuario';
    public $timestamps = false;

    protected $fillable = [
        'dni',
        'nombre',
        'apellido',
        'telefono',
        'email',
        'direccion',
        'sexo',
    ];

    public function clientes()
    {
        return $this->hasMany(Cliente::class, 'id_cliente');
    }

    public function Medicos()
    {
        return $this->hasMany(Medico::class, 'id_medico');
    }
}
