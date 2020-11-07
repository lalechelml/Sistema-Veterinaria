import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Container = props => {
    return (
        <div id="page-wrapper" class="gray-bg dashbard-1">
            <Header />

            <div class="row wrapper wrapper-content animated fadeInRight">
                <div class="col-lg-12">{props.children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default Container;
