<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoriaProd extends Model
{
    use HasFactory;

    protected $table = 'categoria_prod';
    protected $primaryKey = 'catp_id';
    public $timestamps = false;


    protected $fillable = [
        'catp_nombre', 'catp_descripcion'
    ];
}
