import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = props => {
    const [categorias, setCategorias] = useState([]);

    const [id, setId] = useState("");
    const [categoria, setCategoria] = useState("");
    const [codigo, setCodigo] = useState("");
    const [nombre, setNombre] = useState("");
    const [stock, setStock] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");

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
                setId(data.prod_id);
                setCategoria(data.categoria.catp_id);
                setCodigo(data.prod_codigo);
                setNombre(data.prod_nombre);
                setStock(data.prod_stock);
                setDescripcion(data.prod_descripcion);
                setImagen(data.prod_imagen);
            } else {
                alert(res.message);
            }
        }

        async function categorias() {
            const res = await props.metodo.list("categorias");
            setCategorias(res.data);
        }
        categorias();
    }, []);

    const agregar = async () => {
        let data = new FormData();
        data.set("categoria", categoria);
        data.set("codigo", codigo);
        data.set("nombre", nombre);
        data.set("stock", stock);
        data.set("descripcion", descripcion);
        data.set("imagen", imagen);

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
            $(function() {
                $("#exampleModal").modal({
                    backdrop: true,
                    keyboard: false,
                    focus: false
                });
            });
            Swal.fire({
                icon: "error",
                title: "Gaaa",
                text: res.message
            });
        }
    };

    const actualizar = async () => {
        let data = new FormData();
        data.set("id", id);
        data.set("categoria", categoria);
        data.set("codigo", codigo);
        data.set("nombre", nombre);
        data.set("stock", stock);
        data.set("descripcion", descripcion);
        data.set("imagen", imagen);
        debugger;
        const res = await props.metodo.updateData(data);
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
            $(function() {
                $("#exampleModal").modal({
                    backdrop: true,
                    keyboard: false,
                    focus: false
                });
            });
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

    const previewFile = () => {
        var preview = document.getElementById("preview");
        var file = document.querySelector("input[type=file]").files[0];
        var reader = new FileReader();

        reader.onloadend = function() {
            preview.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
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
                                    <select
                                        className="custom-select"
                                        name="categorias"
                                        required
                                        value={categoria}
                                        onChange={event =>
                                            setCategoria(event.target.value)
                                        }
                                    >
                                        <option>
                                            Seleccione la categoria...
                                        </option>
                                        {categorias.map(item => {
                                            return (
                                                <option value={item.catp_id}>
                                                    {item.catp_nombre}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-paw"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={codigo}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Codigo"
                                        onChange={event =>
                                            setCodigo(event.target.value)
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
                                        value={stock}
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Stock"
                                        onChange={event =>
                                            setStock(event.target.value)
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
                                        type="file"
                                        name="imagen"
                                        className="form-control rounded-right"
                                        required
                                        placeholder="Imagen"
                                        onChange={event => {
                                            setImagen(event.target.files[0]);
                                            previewFile();
                                        }}
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
