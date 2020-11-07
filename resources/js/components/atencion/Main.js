import React, { useEffect, useState } from "react";
import Listar from "./Listar";
import Service from "../services/Service";
import { Switch, Route } from "react-router-dom";
import Agregar from "./Agregar";

import Nav from "./Nav";
const Main = () => {
    const [metodo, setMetodo] = useState(new Service("atencion"));
    const [productos, setProductos] = useState([]);
    const [enfermedades, setEnfermedades] = useState([]);

    useEffect(() => {
        const data = async () => {
            const listEnermedad = await metodo.list("enfermedades");
            const listProductos = await metodo.list("productos");

            setEnfermedades(listEnermedad.data);
            setProductos(listProductos.data);
        };
        data();
    }, []);
    return (
        <Switch>
            <Route path="/atencion" exact>
                <Listar productos={productos} enfermedades={enfermedades} />
            </Route>
            <Route path="/atencion/agregar" exact>
                <Agregar productos={productos} enfermedades={enfermedades} />
            </Route>
        </Switch>
    );
};

export default Main;
