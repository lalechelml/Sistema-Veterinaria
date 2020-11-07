import { data } from "jquery";
import { forEach } from "lodash";
import React, { Fragment, useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import ReactToPrint from "react-to-print";
import "../../../css/Historial.css";

const Imprimir = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="modal-body" id="historial">
            <div id="record_hader">
                <figure id="reacod_logo">
                    <img src="img/anvorguesa.png" alt="" />
                </figure>
                <h2 colSpan="3" id="record_title">
                    HISTORIA CLÍNICA - VETERINARIA ANVORGUESA
                </h2>
            </div>
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th colSpan="4" scope="col">
                            <b>RESEÑA DEL PACIENTE</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <b>NOMBRE : </b>
                            {props.animal.ani_nombre}
                        </td>
                        <td>
                            <b>ESPECIE : </b>
                            {props.animal.ani_especie}
                        </td>
                        <td>
                            <b>RAZA : </b>
                            {props.animal.ani_raza}
                        </td>
                        <td>
                            <b>COLOR : </b>
                            {props.animal.ani_color}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>SEXO : </b>
                            {props.animal.ani_genero}
                        </td>
                        <td>
                            <b>FECHA NACIMIENTO : </b>
                            {props.animal.ani_fecha_nacimiento}
                        </td>
                        <td colSpan="2">
                            <b>EDAD : </b>
                            {`${moment().diff(
                                props.animal.ani_fecha_nacimiento,
                                "years"
                            )} años y ${moment().diff(
                                props.animal.ani_fecha_nacimiento,
                                "month"
                            )} meses y ${moment().diff(
                                props.animal.ani_fecha_nacimiento,
                                "days"
                            )} días`}
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th colSpan="3" scope="col">
                            <b>DATOS DEL PROPIETARIO</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <b>NOMBRE : </b>
                            {props.animal.propietario.pro_nombre +
                                props.animal.propietario.pro_apellidos}
                        </td>
                        <td>
                            <b>DNI : </b>
                            {props.animal.propietario.pro_dni}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <b>DIRECCIÓN : </b>
                            {props.animal.propietario.pro_direccion}
                        </td>
                        <td>
                            <b>CIUDAD : </b>
                            {props.animal.propietario.pro_ciudad}
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <b>EMAIL : </b>
                            {props.animal.propietario.pro_email}
                        </td>
                        <td>
                            <b>TELÉFONO : </b>
                            {props.animal.propietario.pro_telefono}
                        </td>
                    </tr>
                </tbody>
            </table>
            {props.atenciones.map((atencion, indice) => {
                debugger;
                return (
                    <div key={atencion.ate_id}>
                        <h3 className="detalle_title">Atención {indice + 1}</h3>
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th colSpan="4" scope="col">
                                        <b>DATOS DEL MÉDICO</b>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <b>NOMBRE : </b>
                                        {atencion.medico.med_nombre +
                                            atencion.medico.med_apellidos}
                                    </td>
                                    <td>
                                        <b>DNI : </b>
                                        {atencion.medico.med_dni}
                                    </td>
                                    <td>
                                        <b>TELÉFONO : </b>
                                        {atencion.medico.med_telefono}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <b>EMAIL : </b>
                                        {atencion.medico.med_email}
                                    </td>
                                    <td>
                                        <b>SEXO : </b>
                                        {atencion.medico.med_genero}
                                    </td>
                                    <td>
                                        <b>EDAD : </b>
                                        {moment().diff(
                                            atencion.medico
                                                .med_fecha_nacimiento,
                                            "years"
                                        ) + " años"}
                                    </td>
                                </tr>
                            </tbody>
                            <thead className="thead-light">
                                <tr>
                                    <th colSpan="4" scope="col">
                                        <b>DATOS</b>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>FECHA : </b>
                                        {
                                            atencion.ate_fecha_hora.split(
                                                /(\s+)/
                                            )[0]
                                        }
                                    </td>
                                    <td>
                                        <b>HORA : </b>
                                        {
                                            atencion.ate_fecha_hora.split(
                                                /(\s+)/
                                            )[2]
                                        }
                                    </td>
                                    <td colSpan="2">
                                        <b>SERVICIO : </b>
                                        {atencion.servicio.ser_nombre}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>PRECIO : </b>
                                        {"$" + atencion.servicio.ser_precio}
                                    </td>
                                    <td colSpan="3">
                                        <b>DIAGNÓSTICO : </b>
                                        {atencion.ate_diagnostico}
                                    </td>
                                </tr>
                            </tbody>

                            <thead className="thead-light">
                                <tr>
                                    <th
                                        colSpan="4"
                                        scope="col"
                                        className="center_tilte"
                                    >
                                        <b>DETALLES</b>
                                    </th>
                                </tr>
                            </thead>
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">
                                        <b>#</b>
                                    </th>
                                    <th scope="col">
                                        <b>ENFERMEDAD</b>
                                    </th>
                                    <th scope="col">
                                        <b>PRODUCTO</b>
                                    </th>
                                    <th scope="col">
                                        <b>DOSIS</b>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {!props.detalles[indice]
                                    ? null
                                    : props.detalles[indice].map(
                                          detalle,
                                          iDetalle => {
                                              debugger;
                                              return (
                                                  <tr>
                                                      <td>{iDetalle + 1}</td>
                                                      <td>
                                                          {
                                                              detalle.enfermdad
                                                                  .enf_nombre
                                                          }
                                                      </td>
                                                      <td>
                                                          {
                                                              detalle.producto
                                                                  .pro_nombre
                                                          }
                                                      </td>
                                                      <td>
                                                          {detalle.deta_dosis}
                                                      </td>
                                                  </tr>
                                              );
                                          }
                                      )} */}
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    );
});

const Historial = props => {
    const componentRef = useRef();
    const [atenciones, setAtenciones] = useState([]);
    const [detalles, setDetalles] = useState([]);
    useEffect(() => {
        $(function() {
            $("#exampleModal").modal({
                backdrop: true,
                keyboard: false,
                focus: false
            });
        });
        const getData = async () => {
            let listAtenciones = [];

            props.data.atenciones.forEach(async atencion => {
                let ateData = await props.metodo.get(
                    atencion.ate_id,
                    "atencion"
                );
                listAtenciones.push(ateData.data);
                let listDetalles = [];
                ateData.data.detalles.forEach(async detalle => {
                    let detaData = await props.metodo.get(
                        detalle.deta_id,
                        "detalleAtencion"
                    );
                    listDetalles.push(detaData.data);
                });
                let arrayDetalles = [...detalles];
                arrayDetalles.push(listDetalles);
                setDetalles(arrayDetalles);
            });
            setAtenciones(listAtenciones);
        };

        getData();
    }, []);

    useEffect(() => {}, [atenciones]);

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
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {`Historial`}
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

                        <Imprimir
                            ref={componentRef}
                            atenciones={atenciones}
                            detalles={detalles}
                            animal={props.data}
                        />
                        <div className="modal-footer">
                            <ReactToPrint
                                trigger={() => (
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-dismiss="modal"
                                    >
                                        Imprimir
                                    </button>
                                )}
                                content={() => componentRef.current}
                            />

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
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Historial;
