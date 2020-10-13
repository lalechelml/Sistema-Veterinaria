import React, { useEffect, useState } from "react";
import animalesServices from "../services/Animales";

import { Link } from "react-router-dom";

function Listar() {
    const [listAnimal, setListAnimal] = useState([]);

    useEffect(() => {
        async function fetchDataAnimal() {
            const res = await animalesServices.list();
            setListAnimal(res.data);
        }

        fetchDataAnimal();
    }, []);

    const onClickDelete = async id => {
        Swal.fire({
            title: "¿Está seguro que desea eliminar el registro?",
            text: "Se eliminara el registro " + id,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async result => {
            if (result.isConfirmed) {
                const res = await animalesServices.delete(id);
                if (res.success) {
                    const rese = await animalesServices.list();
                    setListAnimal(rese.data);
                    Swal.fire("Eliminado!", res.message, "success");
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Gaaa",
                        text: res.message
                    });
                }
            }
        });
    };

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 d-flex justify-content-center">
                        <a href="" className="badge badge-dark">
                            Agregar
                        </a>
                    </div>
                    <div className="col-8"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8 d-flex justify-content-center align-items-center flex-column">
                        <h2 className="mb-2">Lista de Archivos</h2>
                        <a href="  ">aaaaaaaaaaaaaaaaaaa</a>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Especie</th>
                                    <th scope="col">Raza</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Fecha de Nacimiento</th>
                                    <th scope="col">Genero</th>
                                    <th scope="col">Dueño</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listAnimal.map(animal => {
                                    return (
                                        <tr key={animal.id_animal}>
                                            <th scope="row">
                                                {animal.id_animal}{" "}
                                            </th>
                                            <td> {animal.nombre}</td>
                                            <td> {animal.especie} </td>
                                            <td>{animal.raza} </td>
                                            <td>{animal.color} </td>
                                            <td> {animal.fecha_nacimiento}</td>
                                            <td> {animal.genero}</td>
                                            <td>
                                                {" "}
                                                {animal.cliente.usuario.nombre}
                                            </td>

                                            <td>
                                                <div className="d-flex">
                                                    <a
                                                        href="#"
                                                        className="mx-3 button-action"
                                                        onClick={() =>
                                                            onClickDelete(
                                                                animal.id_animal
                                                            )
                                                        }
                                                    >
                                                        <i className="fas fa-trash-alt"></i>
                                                    </a>
                                                    <Link
                                                        to={
                                                            "/animales/editar/" +
                                                            animal.id_animal
                                                        }
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Listar;
