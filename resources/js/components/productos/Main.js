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
                    <Route path="/productos/listar" exact component={Listar} />
                    <Route
                        path="/productos/agregar"
                        exact
                        component={Agregar}
                    />
                    <Route
                        path="/productos/editar/:id"
                        exact
                        component={Editar}
                    />
                </Switch>
            </main>
        </Router>
    );
}

export default Main;
