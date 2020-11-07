import React from "react";

const Nav = props => {
    return (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Animales</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                    >
                        Listar
                    </button>
                    <button
                        onClick={() => props.agregar()}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nav;
