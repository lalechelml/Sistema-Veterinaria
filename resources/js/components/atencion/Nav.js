import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Nav = props => {
    return (
        <Fragment>
            {/* <div class="row wrapper border-bottom white-bg page-heading">
                <div class="col-lg-10">
                    <h2>Nueva Atención</h2>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Médicos</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a>Atención</a>
                        </li>
                        <li class="breadcrumb-item active">
                            <strong>Agregar</strong>
                        </li>
                    </ol>
                </div>
                <div class="col-lg-2">
                    <NavLink
                        to={"/atencion"}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        // activeClassName="active"
                    >
                        Listar
                    </NavLink>
                    <NavLink
                        // activeClassName="active"
                        to={"/atencion/agregar"}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                    >
                        Nueva Atención
                    </NavLink>
                </div>
            </div> */}

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom pt-0 ">
                <h1 className="h2">Nueva Atención</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                        <NavLink
                            to={"/atencion"}
                            type="button"
                            className="btn tn-sm btn-outline-secondary"
                            // activeClassName="active"
                        >
                            Listar
                        </NavLink>
                        <NavLink
                            // activeClassName="active"
                            to={"/atencion/agregar"}
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Nueva Atención
                        </NavLink>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Nav;
