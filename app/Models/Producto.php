<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    protected $table = 'producto';
    protected $primaryKey = 'prod_id';
    public $timestamps = false;

    protected $fillable = [
        'catp_id', 'ani_nombre', 'prod_codigo', 'prod_nombre', 'prod_stock', 'prod_descripcion', 'prod_imagen',
    ];

    public function categoria()
    {
        return $this->belongsTo(CategoriaProd::class, 'catp_id');
    }
}
