import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Service from "../services/Service";
import Modal from "./Modal";
import MaterialTable from "material-table";
import Nav from "./Nav";

const Listar = () => {
    const [metodo, setMetodo] = useState(new Service("propietarios"));
    const [dataList, setDataList] = useState([]);
    const [columnas, setColumnas] = useState([
        {
            title: "ID",
            field: "pro_id"
        },
        {
            title: "DNI",
            field: "pro_dni"
        },
        {
            title: "Nombre",
            field: "pro_nombre"
        },
        {
            title: "Apellidos",
            field: "pro_apellidos"
        },
        {
            title: "Teléfono",
            field: "pro_telefono"
        },
        {
            title: "Email",
            field: "pro_email"
        },
        {
            title: "Dirección",
            field: "pro_direccion"
        },
        {
            title: "Ciudad",
            field: "pro_ciudad"
        }
    ]);

    const getData = async () => {
        const res = await metodo.list();
        setDataList(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    const eliminar = async id => {
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
                const res = await metodo.delete(id);
                if (res.success) {
                    getData();
                    Swal.fire({
                        position: "center",
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

    const abrirModal = (id = null) => {
        const action = id ? true : false;
        ReactDOM.unmountComponentAtNode(document.getElementById("modalEditar"));
        ReactDOM.render(
            <Modal
                actualizar={getData}
                id={id}
                action={action}
                metodo={metodo}
            />,
            document.getElementById("modalEditar")
        );
    };

    return (
        <Fragment>
            <Nav agregar={abrirModal} />
            <MaterialTable
                columns={columnas}
                data={dataList}
                title="Lista de propietarios"
                actions={[
                    {
                        icon: "edit",
                        tooltip: "Editar Animal",
                        onClick: (event, rowData) => abrirModal(rowData.pro_id)
                    },
                    {
                        icon: "delete",
                        tooltip: "Eliminar Animal",
                        onClick: (event, rowData) => eliminar(rowData.pro_id)
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header: {
                        actions: "Acciones"
                    }
                }}
            />
            <div id="modalEditar"></div>
        </Fragment>
    );
};

export default Listar;
