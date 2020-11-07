import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Service from "../services/Service";
import Modal from "./Modal";
import MaterialTable from "material-table";
import Nav from "./Nav";

const Listar = props => {
    const [lading, setLoading] = useState(true);
    const [dataTable, setDataTable] = useState([]);

    const [metodo, setMetodo] = useState(new Service("atencion"));
    const [dataList, setDataList] = useState([]);
    const [columnas, setColumnas] = useState([
        {
            title: "ID",
            field: "ate_id"
        },
        {
            title: "Animal Atendido",
            field: "animal.ani_nombre"
        },
        {
            title: "Medico",
            field: "medico.med_nombre"
        },
        {
            title: "Servicio",
            field: "servicio.ser_nombre"
        },
        {
            title: "Fecha y Hora",
            field: "ate_fecha_hora"
        },
        {
            title: "Diagnóstico",
            field: "ate_diagnostico"
        }
    ]);

    const getData = async () => {
        const res = await metodo.list();
        setDataList(res.data);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

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
                        let tEnfermedad = props.enfermedades.find(
                            element => element.enf_id == detalle.enf_id
                        );

                        let tProducto = props.productos.find(
                            element => element.prod_id == detalle.prod_id
                        );

                        let tDetalle = {
                            atencion: detalle.ate_id,
                            detalle: detalle.deta_id,
                            enfermedad: tEnfermedad,
                            producto: tProducto,
                            dosis: detalle.deta_dosis
                        };
                        detalles = [...detalles, tDetalle];
                    });
                    return (
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Enfermedad</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Dosis</th>
                                </tr>
                            </thead>
                            <tbody>
                                {detalles.map(item => {
                                    return (
                                        <tr>
                                            <th scope="row">{++count}</th>
                                            <td>
                                                {item.enfermedad.enf_nombre}.
                                            </td>
                                            <td>{item.producto.prod_nombre}</td>
                                            <td>{item.dosis}</td>
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
                title="Lista de enfermedades"
                actions={[
                    {
                        icon: "edit",
                        tooltip: "Editar Categoria",
                        onClick: (event, rowData) => abrirModal(rowData.enf_id)
                    },
                    {
                        icon: "delete",
                        tooltip: "Eliminar Categoria",
                        onClick: (event, rowData) => eliminar(rowData.enf_id)
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
