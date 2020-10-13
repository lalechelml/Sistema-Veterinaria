<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Animal extends Migration
{
    public function up()
    {
        Schema::create('animal', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->integer('id_animal');
            $table->integer('id_cliente')->unsigned();
            $table->integer('id_medico')->unsigned();
            $table->string('nombre', 45)->nullable();
            $table->string('especie', 45)->nullable();
            $table->string('raza', 45)->nullable();
            $table->string('color', 45)->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->string('genero', 45)->nullable();

            $table->primary('id_animal');

            $table->index('id_cliente', 'fk_animal_cliente1_idx');
            $table->index('id_medico', 'fk_animal_medico1_idx');

            $table->foreign('id_cliente')
                ->references('id_cliente')->on('cliente');

            $table->foreign('id_medico')
                ->references('id_medico')->on('medico');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('animal');
    }
}
