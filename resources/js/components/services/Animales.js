const baseUrl = "http://localhost:8000/api/animales";
import axios from "axios";
const animales = {};

animales.listarClientes = async () => {
    const urlList = baseUrl + "/cliente";
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

animales.save = async data => {
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

animales.list = async () => {
    const urlList = baseUrl + "/listar";
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

animales.get = async id => {
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

animales.update = async data => {
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

animales.delete = async id => {
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

export default animales;
