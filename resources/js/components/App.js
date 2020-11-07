import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Routes from "./Routes";
import Container from "./Container";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            {/* <Header /> */}
            <Sidebar />
            <Container>
                <Routes />
            </Container>
        </Router>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("wrapper"));
