import React, { useEffect, useState } from "react";
import animalesServices from "../services/Animales";

function Editar(props) {
    const [id, setId] = useState(null);
    const [cliente, setCliente] = useState({});
    const [medico, setMedico] = useState({});
    const [nombre, setNombre] = useState("");
    const [especie, setEspecie] = useState("");
    const [raza, setRaza] = useState("");
    const [color, setColor] = useState("");
    const [fecha_nacimiento, setFecha] = useState("");
    const [genero, setGenero] = useState([]);

    useEffect(() => {
        async function fetchDataEmployee() {
            let id = props.match.params.id;
            const res = await animalesServices.get(id);
            if (res.success) {
                const data = res.data;
                console.log(data.cliente.id_cliente);
                setId(data.id_animal);
                setCliente(data.cliente.id_cliente);
                setMedico(data.medico.id_medico);
                setNombre(data.nombre);
                setEspecie(data.especie);
                setRaza(data.raza);
                setColor(data.color);
                setFecha(data.fecha_nacimiento);
                setGenero(data.genero);
            } else {
                alert(res.message);
            }
        }
        fetchDataEmployee();

        // async function fetchDataRol() {
        //     const res = await animalesServices.listarClientes();
        //     setCliente(res.data);
        // }
        // fetchDataRol();
    }, []);

    const updateAnimal = async () => {
        const data = {
            id,
            cliente,
            medico,
            nombre,
            especie,
            raza,
            color,
            fecha_nacimiento,
            genero
        };
        const res = await animalesServices.update(data);
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
                                value={color}
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
                                name="date_birth"
                                value={fecha_nacimiento}
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
                                name="gender"
                                required
                                value={genero}
                                onChange={event =>
                                    setGenero(event.target.value)
                                }
                            >
                                <option selected>Genero</option>
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

                            <input
                                type="text"
                                name="cliente"
                                value={cliente}
                                className="form-control rounded-right"
                                required
                                placeholder="Dueño"
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
                                name="medic"
                                value={medico}
                                className="form-control rounded-right"
                                required
                                placeholder="medico"
                                onChange={event =>
                                    setMedico(event.target.value)
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
