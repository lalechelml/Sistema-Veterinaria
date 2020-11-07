import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <Fragment>
            <nav
                class="navbar-default navbar-static-side"
                role="navigation"
                style={{ position: "fixed" }}
            >
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <li
                            class="nav-header"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <div class="dropdown profile-element">
                                <img
                                    height="48"
                                    alt="image"
                                    class="rounded-circle"
                                    src="img/anvorguesa.png"
                                />
                                <a
                                    data-toggle="dropdown"
                                    class="dropdown-toggle"
                                    href="#"
                                >
                                    <span class="block m-t-xs font-bold">
                                        Anvorguesa
                                    </span>
                                    <span class="text-muted text-xs block">
                                        gaa <b class="caret"></b>
                                    </span>
                                </a>
                                <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="profile.html"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="contacts.html"
                                        >
                                            Contacts
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="mailbox.html"
                                        >
                                            Mailbox
                                        </a>
                                    </li>
                                    <li class="dropdown-divider"></li>
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="login.html"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="logo-element">IN+</div>
                        </li>
                        <li>
                            <NavLink to="/animales">
                                <i class="fas fa-paw"></i>
                                <span class="nav-label">Animales</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/propietarios">
                                <i class="fas fa-users"></i>
                                <span class="nav-label">Propietarios</span>
                            </NavLink>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fas fa-user-md"></i>
                                <span class="nav-label">Medícos</span>
                                <span class="fa arrow"></span>
                            </a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <NavLink to="/medicos">
                                        Lista de Medícos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/enfermedades">
                                        Enfermedades
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/servicios">servicios</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/atencion">
                                        Atención Médica
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-bar-chart-o"></i>{" "}
                                <span class="nav-label">Ecommerce</span>
                                <span class="fa arrow"></span>
                            </a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <NavLink to="/productos">Productos</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/categorias">
                                        Categorias
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ventas">Ventas</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/facturas">Facturas</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Sidebar;
