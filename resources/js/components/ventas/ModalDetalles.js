import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
const ModalDetalles = props => {
    const [atencion, setAtencion] = useState("");
    const [venta, setVenta] = useState("");
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [precioVenta, setPrecioVenta] = useState("");
    const [descuento, setDescuento] = useState("");

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
            setAtencion(data.atencion);
            setProducto(data.producto);
            setCantidad(data.cantidad);
            setPrecioVenta(data.precioVenta);
            setDescuento(data.descuento);
        }
    }, []);

    const agregar = async () => {
        const data = {
            atencion: atencion.ate_id,
            producto: producto.prod_id,
            cantidad,
            precioVenta,
            descuento
        };

        const table = {
            atencion,
            producto,
            cantidad,
            precioVenta,
            descuento
        };

        props.setDataTable([...props.dataTable, table]);
        props.setVentasList([...props.ventasList, data]);
        ReactDOM.unmountComponentAtNode(document.getElementById("modalEditar"));
    };

    const actualizar = async () => {
        let data = [...props.ventasList];
        data.splice(props.id, 1, {
            atencion: atencion.ate_id,
            producto: producto.prod_id,
            cantidad,
            precioVenta,
            descuento
        });
        let table = [...props.dataTable];
        table.splice(props.id, 1, {
            atencion,
            producto,
            cantidad,
            precioVenta,
            descuento
        });

        props.setDataTable(table);
        props.setVentasList(data);
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
                                            <i class="fas fa-user-md"></i>
                                        </span>
                                    </div>
                                    <Select
                                        onChange={event => {
                                            if (event) {
                                                setAtencion(event);
                                            }
                                        }}
                                        styles={{
                                            container: (base, state) => ({
                                                ...base,
                                                fontSize: "0.9rem",
                                                width: "calc(100% - 40px)"
                                            })
                                        }}
                                        value={atencion}
                                        placeholder={
                                            "Seleccione el Atención..."
                                        }
                                        isClearable
                                        isSearchable
                                        name="enfermedad"
                                        options={props.atenciones}
                                        getOptionLabel={option =>
                                            `${option.medico.med_nombre} ${option.medico.med_apellidos} - ${option.animal.ani_nombre}`
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i class="fas fa-store"></i>
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
                                            <i class="fas fa-sort-numeric-up"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="number"
                                        min="0"
                                        name="dosis"
                                        value={cantidad}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Cantidad"
                                        onChange={event =>
                                            setCantidad(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i class="fas fa-dollar-sign"></i>
                                        </span>
                                    </div>
                                    <input
                                        min="0"
                                        step="any"
                                        type="number"
                                        value={precioVenta}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Precio de Venta"
                                        onChange={event =>
                                            setPrecioVenta(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i class="fas fa-percent"></i>
                                        </span>
                                    </div>
                                    <input
                                        min="0"
                                        type="number"
                                        value={descuento}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Descuento"
                                        onChange={event =>
                                            setDescuento(event.target.value)
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
