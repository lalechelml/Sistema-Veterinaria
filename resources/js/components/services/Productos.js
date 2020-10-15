const baseUrl = "http://localhost:8000/api/productos";
import axios from "axios";
const productos = {};

productos.listarClientes = async () => {
    const urlList = baseUrl + "/categoria";
    const res = await axios
        .get(urlList)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

productos.save = async data => {
    const urlSave = baseUrl + "/agregar";
    const res = await axios
        .post(urlSave, data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

productos.list = async query => {
    const urlList = baseUrl + "/listar/" + query;
    const res = await axios
        .get(urlList)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
    debugger;
};

productos.get = async id => {
    const urlGet = baseUrl + "/get/" + id;
    const res = await axios
        .get(urlGet)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

productos.update = async data => {
    const urlUpdate = baseUrl + "/actualizar/" + data.id;
    const res = await axios
        .put(urlUpdate, data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

productos.delete = async id => {
    const urlDelete = baseUrl + "/eliminar/" + id;
    const res = await axios
        .delete(urlDelete)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
    return res;
};

export default productos;
