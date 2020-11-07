import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
const ModalDetalles = props => {
    const [enfermedad, setEnfermedad] = useState("");
    const [producto, setProducto] = useState("");
    const [dosis, setDosis] = useState("");

    // ------------ a

    useEffect(() => {
        $(function() {
            $("#exampleModal").modal({
                backdrop: true,
                keyboard: false,
                focus: false
            });
        });
        props.action ? getData() : null;

        function getData() {
            const data = props.dataTable[props.id];
            setEnfermedad(data.enfermedad);
            setProducto(data.producto);
            setDosis(data.dosis);
        }
    }, []);

    const agregar = async () => {
        const data = {
            enfermedad: enfermedad.enf_id,
            producto: producto.prod_id,
            dosis
        };

        const table = {
            enfermedad,
            producto,
            dosis
        };

        props.setDataTable([...props.dataTable, table]);
        props.setDetallesList([...props.detallesList, data]);
        ReactDOM.unmountComponentAtNode(document.getElementById("modalEditar"));
    };

    const actualizar = async () => {
        let data = [...props.detallesList];
        data.splice(props.id, 1, {
            enfermedad: enfermedad.enf_id,
            producto: producto.prod_id,
            dosis
        });
        let table = [...props.dataTable];
        table.splice(props.id, 1, {
            enfermedad,
            producto,
            dosis
        });

        props.setDataTable(table);
        props.setDetallesList(data);
    };

    const quitarModal = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("modalEditar"));
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
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {props.action
                                    ? `Editar ${props.id} `
                                    : "Agregar"}
                            </h5>
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
                            <div className="form was-validated">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user-alt"></i>
                                        </span>
                                    </div>
                                    <Select
                                        onChange={event => {
                                            if (event) {
                                                setEnfermedad(event);
                                            }
                                        }}
                                        styles={{
                                            container: (base, state) => ({
                                                ...base,
                                                fontSize: "0.9rem",
                                                width: "calc(100% - 40px)"
                                            })
                                        }}
                                        value={enfermedad}
                                        placeholder={"Seleccione el Médico..."}
                                        isClearable
                                        isSearchable
                                        name="enfermedad"
                                        options={props.enfermedades}
                                        getOptionLabel={option =>
                                            `${option.enf_nombre}`
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user-alt"></i>
                                        </span>
                                    </div>
                                    <Select
                                        onChange={event => {
                                            if (event) {
                                                setProducto(event);
                                            }
                                        }}
                                        styles={{
                                            container: (base, state) => ({
                                                ...base,
                                                fontSize: "0.9rem",
                                                width: "calc(100% - 40px)"
                                            })
                                        }}
                                        value={producto}
                                        placeholder={"Producto..."}
                                        isClearable
                                        isSearchable
                                        name="producto"
                                        options={props.productos}
                                        getOptionLabel={option =>
                                            `${option.prod_nombre}`
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-calendar-week"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="dosis"
                                        value={dosis}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Ingrese la dosis"
                                        onChange={event =>
                                            setDosis(event.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={() => {
                                    quitarModal();
                                }}
                            >
                                Cerrar
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={() =>
                                    props.action ? actualizar() : agregar()
                                }
                            >
                                {props.action ? `Actualizar ` : "Agregar"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ModalDetalles;
