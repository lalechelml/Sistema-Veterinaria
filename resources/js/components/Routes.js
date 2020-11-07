import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Animal from "./animal/Main";
import Index from "./Index";
import Producto from "./producto/Main";
import Propietario from "./propietario/Main";
import CategoriaProd from "./categoriaProd/Main";
import Medico from "./medico/Main";
import Enfermedades from "./enfermedades/Main";
import Servicios from "./servicios/Main";
import Atencion from "./atencion/Main";
import Ventas from "./ventas/Main";
function Routes(props) {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={Index} />
            </Switch>
            <Animal />
            <Producto />
            <Propietario />
            <CategoriaProd />
            <Medico />
            <Enfermedades />
            <Servicios />
            <Atencion />
            <Ventas />
        </Fragment>
    );
}

export default Routes;
