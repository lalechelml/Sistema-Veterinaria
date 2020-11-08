import { data } from "jquery";
import { forEach } from "lodash";
import React, { Fragment, useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import ReactToPrint from "react-to-print";
import "../../../css/Comprobante.css";

const Imprimir = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="modal-body" id="comprobante">
            <header class="clearfix">
                <div id="logo">
                    <img src="img/anvorguesa.png" />
                </div>
                <h1>{`Comprobante N°${props.venta.ven_numero_comprobante} - ${props.venta.ven_tipo_comprobante}`}</h1>
                <div id="company" class="clearfix">
                    <div>Clínica Veterinaria - ANVORGUESA</div>
                    <div>
                        <b>Vendedor:</b>{" "}
                        {props.venta.usuario.usu_nombres +
                            " " +
                            props.venta.usuario.usu_apellidos}
                        <br /> <b>DNI: </b>
                        {props.venta.usuario.usu_dni}
                    </div>
                    <div>
                        {" "}
                        <b>Teléfono: </b> {props.venta.usuario.usu_celular}
                    </div>
                    <div>
                        <a href={props.venta.usuario.usu_email}>
                            <b>Email: </b> {props.venta.usuario.usu_email}
                        </a>
                    </div>
                </div>
                <div id="project">
                    <div>
                        <span>
                            <b>Cliente: </b>
                        </span>{" "}
                        {props.venta.propietario.pro_nombre}{" "}
                        {props.venta.propietario.pro_apellidos}
                    </div>
                    <div>
                        <span>
                            <b>Dirección: </b>
                        </span>{" "}
                        {props.venta.propietario.pro_direccion}
                    </div>
                    <div>
                        <span>
                            <b>Email: </b>
                        </span>{" "}
                        <a href={props.venta.propietario.pro_email}>
                            {props.venta.propietario.pro_email}
                        </a>
                    </div>
                    <div>
                        <span>
                            {" "}
                            <b>Teléfono: </b>
                        </span>{" "}
                        {props.venta.propietario.pro_telefono}
                    </div>
                    <div>
                        <span>
                            {" "}
                            <b>Fecha: </b>
                        </span>{" "}
                        {props.venta.ven_fecha_hora.split(/(\s+)/)[0]}
                    </div>
                    <div>
                        <span>
                            {" "}
                            <b>Hora: </b>
                        </span>{" "}
                        {props.venta.ven_fecha_hora.split(/(\s+)/)[2]}
                    </div>
                </div>
            </header>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th class="service">Atencción</th>
                            <th class="desc">Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Descuento</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.detalles.map((detalle, indice) => {
                            return (
                                <tr key={indice}>
                                    <td>{indice + 1}</td>
                                    <td class="service">
                                        {detalle.atencion.ate_diagnostico}
                                    </td>
                                    <td class="service">
                                        {detalle.producto.prod_nombre}
                                    </td>
                                    <td class="qty">{detalle.detv_cantidad}</td>

                                    <td class="unit">
                                        ${detalle.detv_precio_venta}
                                    </td>
                                    <td class="unit">
                                        %{detalle.detv_descuento}
                                    </td>
                                    <td class="total">
                                        $
                                        {parseFloat(detalle.detv_cantidad) *
                                            parseFloat(
                                                detalle.detv_precio_venta
                                            ) -
                                            (parseFloat(detalle.detv_cantidad) *
                                                parseFloat(
                                                    detalle.detv_precio_venta
                                                ) *
                                                parseFloat(
                                                    detalle.detv_descuento
                                                )) /
                                                100}
                                    </td>
                                </tr>
                            );
                        })}

                        <tr>
                            <td colspan="6">SUBTOTAL</td>
                            <td class="total">
                                $
                                {(
                                    props.venta.ven_total_venta -
                                    (props.venta.ven_total_venta *
                                        props.venta.ven_impuesto) /
                                        100
                                ).toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6">
                                Inpuesto %{props.venta.ven_impuesto}
                            </td>
                            <td class="total">
                                $
                                {(
                                    (props.venta.ven_total_venta *
                                        props.venta.ven_impuesto) /
                                    100
                                ).toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6" class="grand total">
                                TOTAL
                            </td>
                            <td class="grand total">
                                ${props.venta.ven_total_venta}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="notices">
                    <div>Info:</div>
                    <div class="notice">Clínica Veterinaria - ANVORGUESA</div>
                </div>
            </main>
            <footer>Quiero mi anvorguesa 😺🍔😺🍔</footer>
        </div>
    );
});

const Comprobante = props => {
    const componentRef = useRef();
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
            let { data } = await props.metodo.get(props.data.ven_id);
            setDetalles(data.detalles);
        };

        getData();
    }, []);

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
                                {`Comprobante venta N° ${props.data.ven_numero_comprobante}`}
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
                            detalles={detalles}
                            venta={props.data}
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

export default Comprobante;
