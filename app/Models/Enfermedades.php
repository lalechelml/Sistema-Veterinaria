<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enfermedades extends Model
{
    use HasFactory;

    protected $table = 'enfermedades';
    protected $primaryKey = 'enf_id';
    public $timestamps = false;


    protected $fillable = [
        'enf_nombre', 'enf_descripcion'
    ];
}
