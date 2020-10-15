import React, { useEffect, useState } from "react";
import productosService from "../services/Productos";

function Agregar() {
    const [categoria, setCategoria] = useState(null);
    const [codigo, setCodigo] = useState(null);
    const [nombre, setNombre] = useState(null);
    const [stock, setStock] = useState(null);
    const [descripcion, setDescripcion] = useState(null);
    const [imagen, setImagen] = useState(null);

    // useEffect(() => {
    //     async function fetchDataRol() {
    //         // load data from API
    //         const res = await productosService.list();
    //         setListRol(res.data);
    //     }
    //     fetchDataRol();
    // }, []);

    const saveProducto = async () => {
        const data = {
            categoria,
            codigo,
            nombre,
            stock,
            descripcion,
            imagen
        };
        const res = await productosService.save(data);

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
        <div className="container-fluid">
            <div className="row justify-content-center">
                <a className="button--back" href="{{route('animals.index')}}">
                    <i className="fas fa-arrow-circle-left fa-2x"></i>
                </a>
                <div className="col-8 d-flex justify-content-center align-items-center flex-column">
                    <h2 className="mb-2">Agregar Archivo</h2>

                    <div className="was-validated form">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-user-alt"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="categoria"
                                className="form-control rounded-right"
                                required
                                placeholder="Categoria"
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
                                name="codigo"
                                className="form-control rounded-right"
                                required
                                placeholder="Codigo de Producto"
                                onChange={event =>
                                    setCodigo(event.target.value)
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
                                name="nombre"
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
                                    <i className="fas fa-dog"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="stock"
                                className="form-control rounded-right"
                                required
                                placeholder="Stock"
                                onChange={event => setStock(event.target.value)}
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
                                name="descripcion"
                                className="form-control rounded-right"
                                required
                                placeholder="Descripcion"
                                onChange={event =>
                                    setDescripcion(event.target.value)
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
                                name="stock"
                                className="form-control rounded-right"
                                required
                                placeholder="Imagen"
                                onChange={event =>
                                    setImagen(event.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => saveProducto()}
                        >
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agregar;
