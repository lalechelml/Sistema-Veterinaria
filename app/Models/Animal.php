<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    use HasFactory;

    protected $table = 'animal';
    protected $primaryKey = 'id_animal';
    public $timestamps = false;

    protected $fillable = [
        'id_cliente', 'id_medico', 'nombre', 'especie', 'raza', 'color', 'fecha_nacimiento', 'genero',
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class, 'id_cliente');
    }
    public function medico()
    {
        return $this->belongsTo(Medico::class, 'id_medico');
    }
}
