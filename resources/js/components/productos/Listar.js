import React, { useEffect, useState } from "react";
import productosService from "../services/Productos";

import { Link } from "react-router-dom";

function Listar() {
    const [listProducto, setListProducto] = useState([]);

    // const [query, setQuery] = useState("-");

    const buscar = async query => {
        const res = await productosService.list(query);
        setListProducto(res.data);
    };

    useEffect(() => {
        async function fetchDataproducto() {
            const res = await productosService.list("-");
            setListProducto(res.data);
        }

        fetchDataproducto();
    }, []);

    const onClickDelete = async id => {
        Swal.fire({
            title: "¿Está seguro que desea eliminar el registro?",
            text: "Se eliminara el registro " + id,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "Cancelar"
        }).then(async result => {
            if (result.isConfirmed) {
                const res = await productosService.delete(id);
                if (res.success) {
                    const rese = await productosService.list("-");
                    setListProducto(rese.data);
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Eliminado!",
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
            }
        });
    };

    return (
        <section>
            <div className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Buscar producto"
                    aria-label="Search"
                    onChange={event => {
                        if (event.target.value != "") {
                            buscar(event.target.value);
                        } else buscar("-");
                    }}
                />
                <button
                    className="btn btn-outline-secondary my-2 my-sm-0"
                    type="submit"
                >
                    Buscar
                </button>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-8 d-flex justify-content-center align-items-center flex-column">
                        <h2 className="mb-2">Lista de Archivos</h2>
                        <a href="  ">aaaaaaaaaaaaaaaaaaa</a>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Codigo</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listProducto.map(producto => {
                                    return (
                                        <tr key={producto.prod_id}>
                                            <th scope="row">
                                                {producto.prod_id}{" "}
                                            </th>
                                            <td>
                                                {" "}
                                                {producto.categoria.catp_nombre}
                                            </td>
                                            <td> {producto.prod_codigo}</td>
                                            <td> {producto.prod_nombre}</td>
                                            <td> {producto.prod_stock} </td>
                                            <td>
                                                {producto.prod_descripcion}{" "}
                                            </td>
                                            <td>{producto.prod_imagen} </td>

                                            <td>
                                                <div className="d-flex">
                                                    <a
                                                        className="mx-3 button-action"
                                                        onClick={() =>
                                                            onClickDelete(
                                                                producto.prod_id
                                                            )
                                                        }
                                                    >
                                                        <i className="fas fa-trash-alt"></i>
                                                    </a>
                                                    <Link
                                                        to={
                                                            "/productos/editar/" +
                                                            producto.prod_id
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
