import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = props => {
    const [id, setId] = useState("");
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");

    useEffect(() => {
        $(function() {
            $("#exampleModal").modal({
                backdrop: true,
                keyboard: false,
                focus: false
            });
        });

        props.action ? getPropietarios() : null;
        async function getPropietarios() {
            const res = await props.metodo.get(props.id);
            if (res.success) {
                const data = res.data;
                setId(data.pro_id);
                setDni(data.pro_dni);
                setNombre(data.pro_nombre);
                setApellidos(data.pro_apellidos);
                setTelefono(data.pro_telefono);
                setEmail(data.pro_email);
                setDireccion(data.pro_direccion);
                setCiudad(data.pro_ciudad);
            } else {
                alert(res.message);
            }
        }
    }, []);

    const agregar = async () => {
        const data = {
            dni,
            nombre,
            apellidos,
            telefono,
            email,
            direccion,
            ciudad
        };
        const res = await props.metodo.save(data);

        if (res.success) {
            props.actualizar();
            ReactDOM.unmountComponentAtNode(
                document.getElementById("modalEditar")
            );
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

    const actualizar = async () => {
        const data = {
            id,
            dni,
            nombre,
            apellidos,
            telefono,
            email,
            direccion,
            ciudad
        };
        const res = await props.metodo.update(data);
        if (res.success) {
            props.actualizar();
            ReactDOM.unmountComponentAtNode(
                document.getElementById("modalEditar")
            );
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
                title: "gaa",
                text: res.message
            });
        }
    };

    const quitarModal = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("modalEditar"));
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
                            <div className="was-validated form">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-paw"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control rounded-right"
                                        required
                                        value={dni}
                                        placeholder="Ingrese Dni"
                                        onChange={event =>
                                            setDni(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-paw"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        value={nombre}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Nombre"
                                        onChange={event =>
                                            setNombre(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-dragon"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        value={apellidos}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Apellidos"
                                        onChange={event =>
                                            setApellidos(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-dog"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        value={telefono}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Telefóno"
                                        onChange={event =>
                                            setTelefono(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-palette"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="email"
                                        onChange={event =>
                                            setEmail(event.target.value)
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
                                        value={direccion}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Dirección"
                                        onChange={event =>
                                            setDireccion(event.target.value)
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
                                        value={ciudad}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Ciudad"
                                        onChange={event =>
                                            setCiudad(event.target.value)
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

export default Modal;
