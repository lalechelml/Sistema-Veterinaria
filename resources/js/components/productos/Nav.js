import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
    const buscar = query => {};

    return (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Productos</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                    <NavLink
                        to={"/productos/listar"}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        activeClassName="active"
                    >
                        Listar
                    </NavLink>
                    <NavLink
                        to={"/productos/agregar"}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        activeClassName="active"
                    >
                        Agregar
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Nav;
