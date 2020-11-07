import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = props => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    useEffect(() => {
        $(function() {
            $("#exampleModal").modal({
                backdrop: true,
                keyboard: false,
                focus: false
            });
        });

        props.action ? getData() : null;
        async function getData() {
            const res = await props.metodo.get(props.id);
            if (res.success) {
                const data = res.data;
                setId(data.enf_id);
                setNombre(data.enf_nombre);
                setDescripcion(data.enf_descripcion);
            } else {
                alert(res.message);
            }
        }
    }, []);

    const agregar = async () => {
        const data = {
            nombre,
            descripcion
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
            nombre,
            descripcion
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
                                    <textarea
                                        placeholder="Descripción"
                                        required
                                        value={descripcion}
                                        className="form-control rounded-right"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        onChange={event =>
                                            setDescripcion(event.target.value)
                                        }
                                    ></textarea>
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
