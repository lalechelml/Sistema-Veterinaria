import React, { Component } from "react";

import Agregar from "./Agregar";
import Listar from "./Listar";
import Editar from "./Editar";
import Nav from "./Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main(props) {
    return (
        <Router>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <Nav />
                <Switch>
                    <Route path="/animales/listar" exact component={Listar} />
                    <Route path="/animales/agregar" exact component={Agregar} />
                    <Route
                        path="/animales/editar/:id"
                        exact
                        component={Editar}
                    />
                </Switch>
            </main>
        </Router>
    );
}

export default Main;
