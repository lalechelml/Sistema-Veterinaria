import React, { useEffect, useState } from "react";
import animalesServices from "../services/Animales";

function Agregar() {
    const [cliente, setCliente] = useState(null);
    const [medico, setMedico] = useState(null);
    const [nombre, setNombre] = useState(null);
    const [especie, setEspecie] = useState(null);
    const [raza, setRaza] = useState(null);
    const [color, setColor] = useState(null);
    const [fecha_nacimiento, setFecha] = useState(null);
    const [genero, setGenero] = useState([]);

    useEffect(() => {
        async function fetchDataRol() {
            // load data from API
            const res = await animalesServices.list();
            setListRol(res.data);
        }
        fetchDataRol();
    }, []);

    const saveAnimal = async () => {
        const data = {
            cliente,
            medico,
            nombre,
            especie,
            raza,
            color,
            fecha_nacimiento,
            genero
        };
        const res = await animalesServices.save(data);

        console.log(res);

        if (res.success) {
            Swal.fire({
                position: "top-end",
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
                                name="cliente"
                                className="form-control rounded-right"
                                required
                                placeholder="cliente"
                                onChange={event =>
                                    setCliente(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-user-alt"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="medico"
                                className="form-control rounded-right"
                                required
                                placeholder="Medico"
                                onChange={event =>
                                    setMedico(event.target.value)
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
                                    <i className="fas fa-dragon"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="especie"
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
                                name="raza"
                                className="form-control rounded-right"
                                required
                                placeholder="Raza"
                                onChange={event => setRaza(event.target.value)}
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
                                className="form-control rounded-right"
                                required
                                placeholder="Color"
                                onChange={event => setColor(event.target.value)}
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
                                name="fecha_nacimiento"
                                className="form-control rounded-right"
                                required
                                placeholder="Fecha de Nacimiento"
                                onChange={event => setFecha(event.target.value)}
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
                                name="genero"
                                required
                                onChange={event =>
                                    setGenero(event.target.value)
                                }
                            >
                                <option value="">Genero</option>
                                <option value="Macho">Macho</option>
                                <option value="Hembra">Hembra</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => saveAnimal()}
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
