import React from "react";
import Listar from "./Listar";

import { Switch, Route } from "react-router-dom";

const Main = () => {
    return (
        <Switch>
            <Route path="/animales" exact>
                <Listar />
            </Route>
        </Switch>
    );
};

export default Main;
