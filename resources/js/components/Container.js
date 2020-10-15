import React, { Component } from "react";
import Sidebar from "./Sidebar";

function Container(props) {
    return (
        <div class="container-fluid">
            <div class="row">
                <Sidebar />
                {props.children}
            </div>
        </div>
    );
}

export default Container;
