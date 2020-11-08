import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Service from "../services/Service";
import Modal from "./Modal";
import MaterialTable from "material-table";
import Nav from "./Nav";
import Comprobante from "./Comprobante";

const Listar = props => {
    const [lading, setLoading] = useState(true);
    const [dataTable, setDataTable] = useState([]);

    const [metodo, setMetodo] = useState(new Service("ventas"));
    const [dataList, setDataList] = useState([]);
    const [columnas, setColumnas] = useState([
        {
            title: "ID",
            field: "ven_id"
        },
        {
            title: "Usuario",
            field: "usuario.usu_nombres"
        },
        {
            title: "Propietario",
            field: "propietario.pro_nombre"
        },
        {
            title: "Numero de Comprobante",
            field: "ven_numero_comprobante"
        },
        {
            title: "Tipo de Comprobante",
            field: "ven_tipo_comprobante"
        },
        {
            title: "Fecha y Hora",
            field: "ven_fecha_hora"
        },
        {
            title: "Impuesto",
            field: "ven_impuesto"
        },
        {
            title: "Venta Total",
            field: "ven_total_venta"
        }
    ]);

    const getData = async () => {
        setDataList(props.ventas);
    };

    useEffect(() => {
        getData();
        props.ventas.length != 0 ? setLoading(false) : null;
    }, [props]);

    const eliminar = async id => {
        Swal.fire({
            title: "¿Está seguro que desea eliminar el registro?",
            text: "Se eliminara el registro " + id,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "Cancelar"
        }).then(async result => {
            if (result.isConfirmed) {
                const res = await metodo.delete(id);
                if (res.success) {
                    getData();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Eliminado!",
                        showConfirmButton: false,
                        timer: 1000
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Gaaa",
                        text: res.message
                    });
                }
            }
        });
    };

    const abrirModal = (id = null) => {
        const action = id ? true : false;
        ReactDOM.unmountComponentAtNode(document.getElementById("modalEditar"));
        ReactDOM.render(
            <Modal
                actualizar={getData}
                id={id}
                action={action}
                metodo={metodo}
            />,
            document.getElementById("modalEditar")
        );
    };

    return (
        <Fragment>
            <Nav />
            <MaterialTable
                detailPanel={rowData => {
                    let count = 0;
                    let detalles = [];
                    rowData.detalles.forEach(detalle => {
                        let tAtencion = props.atenciones.find(
                            element => element.ate_id == detalle.ate_id
                        );
                        let tProducto = props.productos.find(
                            element => element.prod_id == detalle.prod_id
                        );
                        let tDetalle = {
                            atencion: tAtencion,
                            producto: tProducto,
                            cantidad: detalle.detv_cantidad,
                            precioVenta: detalle.detv_precio_venta,
                            descuento: detalle.detv_descuento
                        };
                        detalles = [...detalles, tDetalle];
                    });
                    return (
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Atención</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio de Venta</th>
                                    <th scope="col">Descuento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {detalles.map(item => {
                                    return (
                                        <tr>
                                            <th scope="row">{++count}</th>
                                            <td>
                                                {item.atencion.ate_fecha_hora}
                                            </td>
                                            <td>{item.producto.prod_nombre}</td>
                                            <td>{item.cantidad}</td>
                                            <td>{item.precioVenta}</td>
                                            <td>{item.descuento}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    );
                }}
                isLoading={lading}
                columns={columnas}
                data={dataList}
                title="Lista de Ventas"
                actions={[
                    {
                        icon: "text_snippet",
                        tooltip: "Ver Comprobante",
                        onClick: (event, rowData) => {
                            ReactDOM.unmountComponentAtNode(
                                document.getElementById("modalEditar")
                            );
                            ReactDOM.render(
                                <Comprobante metodo={metodo} data={rowData} />,
                                document.getElementById("modalEditar")
                            );
                        }
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header: {
                        actions: "Acciones"
                    }
                }}
            />
            <div id="modalEditar"></div>
        </Fragment>
    );
};

export default Listar;
