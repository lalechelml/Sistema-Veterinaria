import React, { useEffect, useState } from "react";
import Listar from "./Listar";
import Service from "../services/Service";
import { Switch, Route } from "react-router-dom";
import Agregar from "./Agregar";

const Main = () => {
    const [metodo, setMetodo] = useState(new Service("ventas"));
    const [productos, setProductos] = useState([]);
    const [atenciones, setAtenciones] = useState([]);
    const [ventas, setVentas] = useState([]);
    const [numeroVenta, setNumeroVenta] = useState([]);

    useEffect(() => {
        const data = async () => {
            const listAtencion = await metodo.list("atencion");
            const listProductos = await metodo.list("productos");
            const listVentas = await metodo.list();
            setAtenciones(listAtencion.data);
            setProductos(listProductos.data);
            setVentas(listVentas.data);
            setNumeroVenta(listVentas.numeroComprobante);
        };
        data();
    }, []);

    const getData = async () => {
        const listVentas = await metodo.list();
        setVentas(listVentas.data);
        setNumeroVenta(listVentas.numeroComprobante);
    };
    return (
        <Switch>
            <Route path="/ventas" exact>
                <Listar
                    productos={productos}
                    atenciones={atenciones}
                    ventas={ventas}
                />
            </Route>
            <Route path="/ventas/agregar" exact>
                <Agregar
                    getData={getData}
                    productos={productos}
                    atenciones={atenciones}
                    numeroVenta={numeroVenta}
                />
            </Route>
        </Switch>
    );
};

export default Main;
