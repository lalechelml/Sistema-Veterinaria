import React, { Component } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const buscar = query => {};

    return (
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Animales</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <Link
                        to={"/animales/listar"}
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                    >
                        Listar
                    </Link>
                    <Link
                        to={"/animales/agregar"}
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                    >
                        Agregar
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
