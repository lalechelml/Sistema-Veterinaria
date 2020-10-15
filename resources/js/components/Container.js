import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

import Animal from "./animales/Main";
import Index from "./Index";
import Producto from "./productos/Main";

function Container() {
    return (
        <Router>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/animales" exact component={Animal} />
                        <Route path="/productos" exact component={Producto} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default Container;

ReactDOM.render(<Container />, document.getElementById("main"));
