<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servicios extends Model
{
    use HasFactory;

    protected $table = 'servicios';
    protected $primaryKey = 'ser_id';
    public $timestamps = false;

    protected $fillable = [
        'ser_nombre', 'ser_descripcion'
    ];
}
