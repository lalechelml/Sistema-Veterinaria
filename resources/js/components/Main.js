import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Agregar from "./animales/Agregar";
import Listar from "./animales/Listar";
import Editar from "./animales/Editar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./animales/Nav";
import Container from "./Container";

function Main() {
    return (
        <Router>
            <Header />
            <Container>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <Nav />
                    <Switch>
                        <Route
                            path="/animales/listar"
                            exact
                            component={Listar}
                        />
                        <Route
                            path="/animales/agregar"
                            exact
                            component={Agregar}
                        />
                        <Route
                            path="/animales/editar/:id"
                            exact
                            component={Editar}
                        />
                    </Switch>
                </main>
            </Container>
        </Router>
    );
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById("main"));
