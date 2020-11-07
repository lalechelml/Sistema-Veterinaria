import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Service from "../services/Service";
import Nav from "./Nav";
import Select from "react-select";
import MaterialTable from "material-table";
import ModalDetalles from "./ModalDetalles";

import ModalPropietario from "../propietario/Modal";

const Agregar = props => {
    const [lading, setLoading] = useState(false);

    const [metodo, setMetodo] = useState(new Service("ventas"));
    const [propietarios, setPropietarios] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    const [atenciones, setAtenciones] = useState([]);
    // ----------------------
    const [usuario, setUsuario] = useState("");
    const [propietario, setPropietario] = useState("");
    const [numeroComprobante, setNumeroComprobante] = useState("");
    const [tipoComprobante, setTipoComprobante] = useState("");
    const [fechaHora, setFechaHora] = useState("");
    const [impuesto, setImpuesto] = useState("");
    const [ventaTotal, setVentaTotal] = useState("");

    const [ventasList, setVentasList] = useState([]);

    const [dataTable, setDataTable] = useState([]);

    const getData = async name => {
        const { data } = await metodo.list(name);
        return data;
    };

    const getPropietarios = async () => {
        const { data } = await metodo.list("propietarios");
        setPropietarios(data);
        if (propietario) {
            const selectData = await metodo.get(
                propietario.pro_id,
                "propietarios"
            );
            setPropietario(selectData.data);
        }
    };

    useEffect(() => {
        let total = 0;
        ventasList.forEach(item => {
            total +=
                parseFloat(item.cantidad) * parseFloat(item.precioVenta) -
                (parseFloat(item.cantidad) *
                    parseFloat(item.precioVenta) *
                    parseFloat(item.descuento)) /
                    100;
        });
        impuesto ? (total += (total * parseFloat(impuesto)) / 100) : null;
        setVentaTotal(total.toFixed(2).toString());
        let nComprobante = "";
        for (let i = props.numeroVenta.length; i <= 8; i++) {
            i == 8
                ? (nComprobante += props.numeroVenta)
                : (nComprobante += "0");
        }
        setNumeroComprobante(nComprobante);
    }, [ventasList, props.numeroVenta, impuesto]);

    useEffect(() => {
        document.getElementById("buttonAgregar").setAttribute("disabled", true);
        const data = async () => {
            getPropietarios();
            // getServicios();
            // -----detalles
            const listAtencion = await metodo.list("atencion");

            setAtenciones(listAtencion.data);
            setLoading(true);
            document
                .getElementById("buttonAgregar")
                .removeAttribute("disabled");
        };
        data();
    }, []);

    const [columnas, setColumnas] = useState([
        {
            title: "Atencion",
            render: rowData => {
                return (
                    <p
                        onClick={() => {
                            modalAtenciob(rowData.enfermedad);
                        }}
                    >
                        {rowData.atencion.medico.med_nombre}
                    </p>
                );
            }
        },
        {
            title: "Producto",
            render: rowData => {
                return (
                    <p
                        onClick={() => {
                            modalProducto(rowData.producto);
                        }}
                    >
                        {rowData.producto.prod_nombre}
                    </p>
                );
            }
        },

        {
            title: "Cantidad",
            render: rowData => {
                return <p>{rowData.cantidad}</p>;
            }
        },
        {
            title: "Precio de venta",
            render: rowData => {
                return <p>{rowData.precioVenta}$</p>;
            }
        },
        {
            title: "Descuento",
            render: rowData => {
                return <p>{rowData.descuento}%</p>;
            }
        },
        {
            title: "Total",
            render: rowData => {
                return (
                    <p>
                        {parseFloat(rowData.cantidad) *
                            parseFloat(rowData.precioVenta) -
                            (parseFloat(rowData.cantidad) *
                                parseFloat(rowData.precioVenta) *
                                parseFloat(rowData.descuento)) /
                                100}
                        $
                    </p>
                );
            }
        }
    ]);

    const agregarDetalle = (id = null) => {
        const action = id || id == 0 ? true : false;
        ReactDOM.unmountComponentAtNode(document.getElementById("modalEditar"));
        ReactDOM.render(
            <ModalDetalles
                actualizar={getData}
                id={id}
                action={action}
                metodo={metodo}
                ventasList={ventasList}
                setVentasList={setVentasList}
                productos={props.productos}
                atenciones={props.atenciones}
                setDataTable={setDataTable}
                dataTable={dataTable}
            />,
            document.getElementById("modalEditar")
        );
    };

    const modalEnfermedad = enfermedad => {
        document.getElementById("modalTittle").innerHTML =
            enfermedad.enf_nombre;
        document.getElementById("description").innerHTML =
            enfermedad.enf_descripcion;

        $("#preview").css("display", "none");
        $(function() {
            $("#modalImagen").modal({
                backdrop: true,
                keyboard: false,
                focus: false
            });
        });
    };

    const modalProducto = producto => {
        document.getElementById("description").innerHTML = producto.prod_stock;
        document.getElementById("modalTittle").innerHTML = producto.prod_nombre;
        $("#preview").css("display", "flex");
        document
            .getElementById("preview")
            .setAttribute("src", producto.prod_imagen);
        $(function() {
            $("#modalImagen").modal({
                backdrop: true,
                keyboard: false,
                focus: false
            });
        });
    };

    const guardarAtencion = async () => {
        const data = {
            usuario: 2,
            propietario: propietario.pro_id,
            numeroComprobante,
            tipoComprobante,
            fechaHora,
            impuesto,
            ventaTotal
        };

        const res = await metodo.save(data);
        if (res.success) {
            let count = 0;
            ventasList.forEach(async item => {
                let items = {
                    venta: res.id,
                    atencion: item.atencion,
                    producto: item.producto,
                    cantidad: item.cantidad,
                    precioVenta: item.precioVenta,
                    descuento: item.descuento
                };
                let detallesRequest = await metodo.save(items, "detallesVenta");

                if (!detallesRequest.success) {
                    Swal.fire({
                        icon: "error",
                        title: "Gaaa",
                        text: message
                    });
                } else count++;

                if (ventasList.length == count) {
                    terminarRegistro(detallesRequest);
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Gaaa",
                text: res.message
            });
        }
    };

    const terminarRegistro = res => {
        if (res.success) {
            setUsuario("");
            setPropietario("");
            setNumeroComprobante("");
            setTipoComprobante("");
            setFechaHora("");
            setImpuesto("");
            setVentaTotal("");
            setDataTable([]);
            setVentasList([]);
            props.getData();
            Swal.fire({
                position: "center",
                icon: "success",
                title: res.message,
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
    };

    const eliminar = id => {
        let data = [...dataTable];
        data.splice(id, 1);
        setDataTable(data);
        let dataList = [...ventasList];
        dataList.splice(id, 1);
        setVentasList(dataList);
    };

    const modalPropietario = (id = null) => {
        const action = id ? true : false;
        ReactDOM.unmountComponentAtNode(document.getElementById("modalEditar"));
        ReactDOM.render(
            <ModalPropietario
                actualizar={getPropietarios}
                id={id}
                action={action}
                metodo={new Service("propietarios")}
            />,
            document.getElementById("modalEditar")
        );
    };

    return (
        <Fragment>
            <Nav />
            <div style={{ backgroundColor: "white" }}>
                <div className="form_container row-cols-2 d-lg-flex justify-content-lg-around mx-3 justify-content-center">
                    <div className="form was-validated pt-1 mx-auto mx-lg-2">
                        <div className="d-flex my-3">
                            <h2 className="my-0 mr-3">Propietario</h2>
                            <div class="dropdown">
                                <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenu2"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Opciones
                                </button>
                                <div
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenu2"
                                >
                                    <button
                                        class="dropdown-item"
                                        type="button"
                                        onClick={() => modalPropietario()}
                                    >
                                        Agregar Propietario
                                    </button>
                                    <button
                                        class="dropdown-item"
                                        type="button"
                                        onClick={() =>
                                            propietario
                                                ? modalPropietario(
                                                      propietario.pro_id
                                                  )
                                                : null
                                        }
                                    >
                                        Editar Propietario Seleccionado
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend dropleft">
                                <span className="input-group-text">
                                    <i class="fas fa-paw"></i>
                                </span>
                            </div>
                            <Select
                                onChange={event => {
                                    if (event) {
                                        setPropietario(event);
                                    }
                                }}
                                styles={{
                                    container: (base, state) => ({
                                        ...base,
                                        fontSize: "0.9rem",
                                        width: "calc(100% - 40px)"
                                    })
                                }}
                                value={propietario}
                                placeholder={"Seleccione cliente..."}
                                name="cliente"
                                // isClearable
                                // isSearchable
                                options={propietarios}
                                getOptionLabel={option =>
                                    `${option.pro_nombre} ${option.pro_apellidos} - ${option.pro_dni}`
                                }
                            />
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                            <input
                                disabled
                                type="text"
                                name="date_birth"
                                value={
                                    propietario
                                        ? propietario.pro_telefono
                                        : null
                                }
                                className="form-control rounded-right"
                                placeholder="Teléfono"
                            />
                            <div className="input-group-prepend ml-1">
                                <span className="input-group-text rounded-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                            <input
                                disabled
                                type="text"
                                name="date_birth"
                                value={
                                    propietario ? propietario.pro_email : null
                                }
                                className="form-control rounded-right"
                                placeholder="Email"
                            />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i class="fas fa-map-marked-alt"></i>
                                </span>
                            </div>
                            <input
                                disabled
                                type="text"
                                name="date_birth"
                                value={
                                    propietario
                                        ? propietario.pro_direccion
                                        : null
                                }
                                className="form-control rounded-right"
                                placeholder="Teléfono"
                            />
                            <div className="input-group-prepend ml-1">
                                <span className="input-group-text rounded-left">
                                    <i class="fas fa-city"></i>
                                </span>
                            </div>
                            <input
                                disabled
                                type="text"
                                name="date_birth"
                                value={
                                    propietario ? propietario.pro_ciudad : null
                                }
                                className="form-control rounded-right"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="form pt-1 mx-auto mx-lg-2">
                        <div className="d-flex my-3" style={{ height: "33px" }}>
                            <h2 className="my-0 mr-3">Venta</h2>
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i class="fas fa-file-invoice-dollar"></i>
                                </span>
                            </div>
                            <input
                                type="number"
                                value={numeroComprobante}
                                className="form-control rounded-right"
                                required
                                disabled
                                placeholder="Numero de Comprobante"
                            />
                            <div className="input-group-prepend ml-1">
                                <span className="input-group-text rounded-left">
                                    <i class="fas fa-file-invoice"></i>
                                </span>
                            </div>
                            <select
                                className="custom-select"
                                name="gender"
                                required
                                value={tipoComprobante}
                                onChange={event =>
                                    setTipoComprobante(event.target.value)
                                }
                            >
                                <option>Tipo de Comprobante</option>
                                <option value="Boleta">Boleta</option>
                                <option value="Factura">Factura</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-calendar-week"></i>
                                </span>
                            </div>
                            <input
                                type="datetime-local"
                                name="date_birth"
                                value={fechaHora}
                                className="form-control rounded-right"
                                required
                                placeholder="Fecha y Hora"
                                onChange={event =>
                                    setFechaHora(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i class="fas fa-hand-holding-usd"></i>
                                </span>
                            </div>
                            <input
                                type="number"
                                value={impuesto}
                                className="form-control rounded-right"
                                required
                                placeholder="Impuesto"
                                onChange={event =>
                                    setImpuesto(event.target.value)
                                }
                            />
                            <div className="input-group-prepend ml-1">
                                <span className="input-group-text rounded-left">
                                    <i class="fas fa-dollar-sign"></i>
                                </span>
                            </div>
                            <input
                                disabled
                                type="number"
                                value={ventaTotal}
                                className="form-control"
                                required
                                placeholder="Venta Total"
                            />
                        </div>
                    </div>
                </div>
                <button
                    id="buttonAgregar"
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => {
                        agregarDetalle();
                    }}
                >
                    Agregar Detalles
                </button>

                <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => {
                        guardarAtencion();
                    }}
                >
                    Guardar Atención
                </button>

                <div className="row-cols-1">
                    <MaterialTable
                        columns={columnas}
                        data={dataTable}
                        title="Detalles de atención"
                        actions={[
                            {
                                icon: "edit",
                                tooltip: "Editar detalle de venta",
                                onClick: (event, rowData) =>
                                    agregarDetalle(rowData.tableData.id)
                            },
                            {
                                icon: "delete",
                                tooltip: "Eliminar Categoria",
                                onClick: (event, rowData) =>
                                    eliminar(rowData.tableData.id)
                            }
                        ]}
                        options={{
                            actionsColumnIndex: -1,
                            headerStyle: {
                                backgroundColor: "#01579b",
                                color: "#FFF",
                                zIndex: "0"
                            }
                        }}
                        localization={{
                            header: {
                                actions: "Acciones"
                            }
                        }}
                    />
                </div>
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
                                <h3 id="modalTittle"></h3>
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
                                <div id="moreDiv"></div>
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
            </div>
        </Fragment>
    );
};

export default Agregar;
