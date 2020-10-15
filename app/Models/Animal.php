<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    use HasFactory;

    protected $table = 'animal';
    protected $primaryKey = 'ani_id';
    public $timestamps = false;

    protected $fillable = [
        'pro_id', 'ani_nombre', 'ani_especie', 'ani_raza', 'ani_color', 'ani_fecha_nacimiento', 'ani_genero',
    ];

    public function propietario()
    {
        return $this->belongsTo(Propietario::class, 'pro_id');
    }
}
