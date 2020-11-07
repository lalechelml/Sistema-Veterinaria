import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Service from "../services/Service";
import Nav from "./Nav";
import Select from "react-select";
import MaterialTable from "material-table";
import ModalDetalles from "./ModalDetalles";

import ModalAnimal from "../animal/Modal";
import ModalServicio from "../servicios/Modal";

const Agregar = props => {
    const [lading, setLoading] = useState(false);

    const [metodo, setMetodo] = useState(new Service("atencion"));
    const [animales, setAnimales] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [servicios, setServicios] = useState([]);

    const [atenciones, setAtenciones] = useState([]);
    // ----------------------
    const [animal, setAnimal] = useState("");
    const [medico, setMedico] = useState("");
    const [servicio, setServicio] = useState("");
    const [fechaHora, setFechaHora] = useState("");
    const [diagnostico, setDiagnostico] = useState("");

    const [detallesList, setDetallesList] = useState([]);

    const [dataTable, setDataTable] = useState([]);

    const getData = async name => {
        const { data } = await metodo.list(name);
        return data;
    };

    const getAnimal = async () => {
        const { data } = await metodo.list("animales");
        setAnimales(data);
        if (animal) {
            const selectData = await metodo.get(animal.ani_id, "animales");
            setAnimal(selectData.data);
        }
    };

    const getServicios = async () => {
        const { data } = await metodo.list("servicios");
        setServicios(data);
        if (servicio) {
            const selectData = await metodo.get(servicio.ser_id, "servicios");
            setAnimal(selectData.data);
        }
    };

    useEffect(() => {
        document.getElementById("buttonAgregar").setAttribute("disabled", true);
        const data = async () => {
            getAnimal();
            getServicios();
            const listMedicos = await metodo.list("medicos");
            setMedicos(listMedicos.data);
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
            title: "Enfermedad",
            render: rowData => {
                return (
                    <p
                        onClick={() => {
                            modalEnfermedad(rowData.enfermedad);
                        }}
                    >
                        {rowData.enfermedad.enf_nombre}
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
            title: "Dosis",
            field: "dosis"
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
                detallesList={detallesList}
                setDetallesList={setDetallesList}
                enfermedades={props.enfermedades}
                productos={props.productos}
                setDataTable={setDataTable}
                dataTable={dataTable}
            />,
            document.getElementById("modalEditar")
        );
        // setDetallesList.add();
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
            animal: animal.ani_id,
            medico: medico.med_id,
            servicio: servicio.ser_id,
            fechaHora,
            diagnostico
        };

        const res = await metodo.save(data);
        if (res.success) {
            let count = 0;
            detallesList.forEach(async item => {
                let items = {
                    atencion: res.id,
                    enfermedad: item.enfermedad,
                    producto: item.producto,
                    dosis: item.dosis
                };
                let detallesRequest = await metodo.save(
                    items,
                    "detalleAtencion"
                );

                if (!detallesRequest.success) {
                    Swal.fire({
                        icon: "error",
                        title: "Gaaa",
                        text: message
                    });
                } else count++;

                if (detallesList.length == count) {
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
            setMedico("");
            setAnimal("");
            setServicio("");
            setFechaHora("");
            setDiagnostico("");
            setDataTable([]);
            setDetallesList([]);
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
        let dataList = [...detallesList];
        dataList.splice(id, 1);
        setDetallesList(dataList);
    };

    const modalAnimal = (id = null) => {
        const action = id ? true : false;
        ReactDOM.unmountComponentAtNode(document.getElementById("modalEditar"));
        ReactDOM.render(
            <ModalAnimal
                actualizar={getAnimal}
                id={id}
                action={action}
                metodo={new Service("animales")}
            />,
            document.getElementById("modalEditar")
        );
    };

    const modalServicio = (id = null) => {
        const action = id ? true : false;
        ReactDOM.unmountComponentAtNode(document.getElementById("modalEditar"));
        ReactDOM.render(
            <ModalServicio
                actualizar={getServicios}
                id={id}
                action={action}
                metodo={new Service("servicios")}
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
                            <h2 className="my-0 mr-3">Animal</h2>
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
                                        onClick={() => modalAnimal()}
                                    >
                                        Agregar Animal
                                    </button>
                                    <button
                                        class="dropdown-item"
                                        type="button"
                                        onClick={() =>
                                            animal
                                                ? modalAnimal(animal.ani_id)
                                                : null
                                        }
                                    >
                                        Editar Animal Seleccionado
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
                                        setAnimal(event);
                                    }
                                }}
                                styles={{
                                    container: (base, state) => ({
                                        ...base,
                                        fontSize: "0.9rem",
                                        width: "calc(100% - 40px)"
                                    })
                                }}
                                value={animal}
                                placeholder={"Seleccione animal..."}
                                name="animal"
                                // isClearable
                                // isSearchable
                                options={animales}
                                getOptionLabel={option =>
                                    `${option.ani_nombre} - ${option.propietario.pro_nombre} ${option.propietario.pro_apellidos}`
                                }
                            />
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i class="fas fa-dragon"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                value={animal ? animal.ani_especie : null}
                                className="form-control rounded-right"
                                disabled
                                placeholder="Especie"
                            />

                            <input
                                type="text"
                                value={animal ? animal.ani_raza : null}
                                className="form-control rounded ml-1"
                                disabled
                                placeholder="Raza"
                            />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i class="fas fa-palette"></i>
                                </span>
                            </div>
                            <input
                                disabled
                                type="text"
                                value={animal ? animal.ani_color : null}
                                className="form-control rounded-right"
                                placeholder="Color"
                            />
                            <div className="input-group-prepend ml-1">
                                <span className="input-group-text rounded-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                            <input
                                disabled
                                type="text"
                                value={animal ? animal.ani_genero : null}
                                className="form-control rounded-right"
                                placeholder="Genero"
                            />
                        </div>
                        <div className="d-flex" style={{ height: "33px" }}>
                            <h2 className="my-0 mr-3">Propietario</h2>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i class="far fa-user"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="date_birth"
                                value={
                                    animal
                                        ? animal.propietario.pro_nombre
                                        : null
                                }
                                className="form-control rounded-right"
                                disabled
                                placeholder="Nombre"
                            />

                            <input
                                type="text"
                                name="date_birth"
                                value={
                                    animal
                                        ? animal.propietario.pro_apellidos
                                        : null
                                }
                                className="form-control rounded ml-1"
                                disabled
                                placeholder="Apellidos"
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
                                    animal
                                        ? animal.propietario.pro_telefono
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
                                    animal ? animal.propietario.pro_email : null
                                }
                                className="form-control rounded-right"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="form pt-1 mx-auto mx-lg-2">
                        <div className="d-flex my-3" style={{ height: "33px" }}>
                            <h2 className="my-0 mr-3">Medico</h2>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i class="fas fa-user-plus"></i>
                                </span>
                            </div>
                            <Select
                                onChange={event => {
                                    if (event) {
                                        setMedico(event);
                                    }
                                }}
                                styles={{
                                    container: (base, state) => ({
                                        ...base,
                                        fontSize: "0.9rem",
                                        width: "calc(100% - 40px)"
                                    })
                                }}
                                value={medico}
                                placeholder={"Seleccione el Médico..."}
                                isClearable
                                isSearchable
                                name="medico"
                                options={medicos}
                                getOptionLabel={option =>
                                    `${option.med_nombre} ${option.med_apellidos} - ${option.med_dni}`
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
                                value={medico ? medico.med_telefono : null}
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
                                value={medico ? medico.med_email : null}
                                className="form-control rounded-right"
                                placeholder="Email"
                            />
                        </div>
                        <div className="d-flex" style={{ height: "33px" }}>
                            <h2 className="my-0 mr-3">Servicio</h2>
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
                                        onClick={() => modalServicio()}
                                    >
                                        Agregar Servicio
                                    </button>
                                    <button
                                        class="dropdown-item"
                                        type="button"
                                        onClick={() =>
                                            servicio
                                                ? modalServicio(servicio.ser_id)
                                                : null
                                        }
                                    >
                                        Editar Servicio Seleccionado
                                    </button>
                                </div>
                            </div>
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
                                        setServicio(event);
                                    }
                                }}
                                styles={{
                                    container: (base, state) => ({
                                        ...base,
                                        fontSize: "0.9rem",
                                        width: "calc(100% - 40px)"
                                    })
                                }}
                                value={servicio}
                                placeholder={"Seleccione el Servicio..."}
                                isClearable
                                isSearchable
                                name="servicio"
                                options={servicios}
                                getOptionLabel={option =>
                                    `${option.ser_nombre}`
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
                                    <i className="fas fa-calendar-week"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="date_birth"
                                value={diagnostico}
                                className="form-control rounded-right"
                                required
                                placeholder="Diagnóstisco"
                                onChange={event =>
                                    setDiagnostico(event.target.value)
                                }
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
