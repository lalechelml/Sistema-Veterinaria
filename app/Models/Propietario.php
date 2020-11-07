<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Propietario extends Model
{
    use HasFactory;

    protected $table = 'propietario';
    protected $primaryKey = 'pro_id';
    public $timestamps = false;

    protected $fillable = [
        'pro_dni', 'pro_nombre', 'pro_apellidos', 'pro_telefono', 'pro_email', 'pro_direccion', 'pro_ciudad',
    ];
}
