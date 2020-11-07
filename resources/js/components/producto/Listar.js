import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Service from "../services/Service";
import Modal from "./Modal";
import MaterialTable from "material-table";
import Nav from "./Nav";
import { event } from "jquery";

const Listar = () => {
    const [metodo, setMetodo] = useState(new Service("productos"));
    const [dataList, setDataList] = useState([]);
    const [columnas, setColumnas] = useState([
        {
            title: "ID",
            field: "prod_id"
        },
        {
            title: "Categoría",
            field: "categoria.catp_nombre"
        },
        {
            title: "Codigo",
            field: "prod_codigo"
        },
        {
            title: "Nombre",
            field: "prod_nombre"
        },
        {
            title: "Stock",
            field: "prod_stock"
        },
        {
            title: "Descripción",
            field: "prod_descripcion",
            render: rowData => {
                const descripcion =
                    rowData.prod_descripcion.length > 60
                        ? rowData.prod_descripcion.slice(0, 60) + "..."
                        : rowData.prod_descripcion;
                return (
                    <p
                        onClick={() => {
                            modalDescripcion(
                                rowData.prod_nombre,
                                rowData.prod_descripcion
                            );
                        }}
                    >
                        {descripcion}
                    </p>
                );
            }
        },
        {
            title: "Imagen",
            field: "prod_imagen",
            render: rowData => (
                <img
                    onClick={() => {
                        modalImagen(rowData.prod_nombre, rowData.prod_imagen);
                    }}
                    src={rowData.prod_imagen}
                    style={{ width: 40 }}
                />
            )
        }
    ]);

    const getData = async () => {
        const res = await metodo.list();
        setDataList(res.data);
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

    const modalDescripcion = (nombre, descripcion) => {
        document.getElementById("exampleModalLabel").innerHTML = nombre;
        document.getElementById("description").innerHTML = descripcion;

        $("#preview").css("display", "none");
        $(function() {
            $("#modalImagen").modal({
                backdrop: true,
                keyboard: false,
                focus: false
            });
        });
    };

    const modalImagen = (nombre, imagen) => {
        document.getElementById("description").innerHTML = null;
        $("#preview").css("display", "flex");
        document.getElementById("preview").setAttribute("src", imagen);
        document.getElementById("exampleModalLabel").innerHTML = nombre;
        $(function() {
            $("#modalImagen").modal({
                backdrop: true,
                keyboard: false,
                focus: false
            });
        });
    };

    return (
        <Fragment>
            <Nav agregar={abrirModal} />
            <MaterialTable
                columns={columnas}
                data={dataList}
                title="Lista de productos"
                actions={[
                    {
                        icon: "edit",
                        tooltip: "Editar Producto",
                        onClick: (event, rowData) => abrirModal(rowData.prod_id)
                    },
                    {
                        icon: "delete",
                        tooltip: "Eliminar Producto",
                        onClick: (event, rowData) => eliminar(rowData.prod_id)
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
                pagination
                paginationComponentOptions={{
                    rowPerPageText: "Filas por Página",
                    rangeSeparatorText: "de",
                    selectAllRowsItem: true,
                    selectAllRowsText: "Todos"
                }}
            />
            <div id="modalEditar"></div>
            <div
                className="modal fade"
                id="modalImagen"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                name="tittle"
                                className="modal-title"
                                id="exampleModalLabel"
                            ></h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p id="description" className="my-0"></p>
                            <img
                                id="preview"
                                className="card-img-top"
                                width="200"
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Listar;
