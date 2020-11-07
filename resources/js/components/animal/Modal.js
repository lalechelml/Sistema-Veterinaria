import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = props => {
    const [propietarios, setPropietarios] = useState([]);
    const [id, setId] = useState("");
    const [propietario, setPropietario] = useState("");
    const [nombre, setNombre] = useState("");
    const [especie, setEspecie] = useState("");
    const [raza, setRaza] = useState("");
    const [color, setColor] = useState("");
    const [fecha_nacimiento, setFecha] = useState("");
    const [genero, setGenero] = useState("");

    useEffect(() => {
        $(function() {
            $("#exampleModal").modal({
                backdrop: true,
                keyboard: false,
                focus: false
            });
        });

        props.action ? getAnimal() : null;
        async function getAnimal() {
            const res = await props.metodo.get(props.id);
            if (res.success) {
                const data = res.data;
                setId(data.ani_id);
                setPropietario(data.propietario.pro_id);
                setNombre(data.ani_nombre);
                setEspecie(data.ani_especie);
                setRaza(data.ani_raza);
                setColor(data.ani_color);
                setFecha(data.ani_fecha_nacimiento);
                setGenero(data.ani_genero);
            } else {
                alert(res.message);
            }
        }

        async function propietarios() {
            const res = await props.metodo.list("propietarios");
            setPropietarios(res.data);
        }
        propietarios();
    }, []);

    const agregar = async () => {
        const data = {
            propietario,
            nombre,
            especie,
            raza,
            color,
            fecha_nacimiento,
            genero
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
            propietario,
            nombre,
            especie,
            raza,
            color,
            fecha_nacimiento,
            genero
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
                title: "Gaaa",
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
                            <div className="form was-validated">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-paw"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
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
                                        name="species"
                                        value={especie}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Especie"
                                        onChange={event =>
                                            setEspecie(event.target.value)
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
                                        name="race"
                                        value={raza}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Raza"
                                        onChange={event =>
                                            setRaza(event.target.value)
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
                                        type="text"
                                        name="color"
                                        value={color}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Color"
                                        onChange={event =>
                                            setColor(event.target.value)
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
                                        type="date"
                                        name="date_birth"
                                        value={fecha_nacimiento}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Fecha de Nacimiento"
                                        onChange={event =>
                                            setFecha(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-mars"></i>
                                            <i className="fas fa-venus"></i>
                                        </span>
                                    </div>

                                    <select
                                        className="custom-select"
                                        name="gender"
                                        required
                                        value={genero}
                                        onChange={event =>
                                            setGenero(event.target.value)
                                        }
                                    >
                                        <option>Genero</option>
                                        <option value="Macho">Macho</option>
                                        <option value="Hembra">Hembra</option>
                                    </select>
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user-alt"></i>
                                        </span>
                                    </div>

                                    <select
                                        className="custom-select"
                                        name="genero"
                                        required
                                        value={propietario}
                                        onChange={event =>
                                            setPropietario(event.target.value)
                                        }
                                    >
                                        <option>
                                            Seleccione propietario...
                                        </option>
                                        {propietarios.map(item => {
                                            return (
                                                <option
                                                    key={item.pro_id}
                                                    value={item.pro_id}
                                                >
                                                    {item.pro_nombre}{" "}
                                                    {item.pro_apellidos}
                                                </option>
                                            );
                                        })}
                                    </select>
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
