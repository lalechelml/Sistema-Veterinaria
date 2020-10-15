import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link "
                            to="/"
                            activeClassName="active"
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link a"
                            to="/animales"
                            activeClassName="active"
                        >
                            Animales
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Clientes
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Medicos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Admin
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="layers"></span>
                            NO se Que poner
                        </a>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Ecommerce</span>
                    <a
                        className="d-flex align-items-center text-muted"
                        href="#"
                        aria-label="Add a new report"
                    >
                        <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to={"/productos"}
                            activeClassName="active"
                        >
                            <span data-feather="file-text"></span>
                            Productos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            Servicios
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            Caja
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            gaaaaaaa
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
