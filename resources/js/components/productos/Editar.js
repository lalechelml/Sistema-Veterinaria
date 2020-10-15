import React, { useEffect, useState } from "react";
import productoService from "../services/Productos";

function Editar(props) {
    const [id, setId] = useState("");
    const [categoria, setCategoria] = useState("");
    const [codigo, setCodigo] = useState("");
    const [nombre, setNombre] = useState("");
    const [stock, setStock] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");

    useEffect(() => {
        console.log("gaaa");
        debugger;
        async function fetchDataEmployee() {
            let id = props.match.params.id;
            const res = await productoService.get(id);
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
        fetchDataEmployee();
    }, []);

    const updateAnimal = async () => {
        const data = {
            id,
            categoria,
            codigo,
            nombre,
            stock,
            descripcion,
            imagen
        };
        const res = await productoService.update(data);
        if (res.success) {
            Swal.fire({
                position: "top-center",
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

    return (
        <div className="container-fluid mt-3">
            <div className="row justify-content-center">
                <a className="button--back" href="{{route('animals.index')}}">
                    <i className="fas fa-arrow-circle-left fa-2x"></i>
                </a>
                <div className="col-8 d-flex justify-content-center align-items-center flex-column">
                    <h2 className="mb-2">Editar Archivos</h2>

                    <div className="form">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-paw"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={categoria}
                                className="form-control rounded-right"
                                required
                                placeholder="Nombre"
                                onChange={event =>
                                    setCategoria(event.target.value)
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
                                value={codigo}
                                className="form-control rounded-right"
                                required
                                placeholder="Nombre"
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
                                placeholder="Especie"
                                onChange={event => setStock(event.target.value)}
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
                                value={descripcion}
                                className="form-control rounded-right"
                                required
                                placeholder="Raza"
                                onChange={event =>
                                    setDescripcion(event.target.value)
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
                                name="imagen"
                                value={imagen}
                                className="form-control rounded-right"
                                required
                                placeholder="imagen"
                                onChange={event =>
                                    setImagen(event.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => updateAnimal()}
                        >
                            Actualizar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editar;
