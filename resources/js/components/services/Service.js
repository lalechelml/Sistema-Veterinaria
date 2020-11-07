import axios from "axios";

class Service {
    constructor(nombreApi) {
        this.nombreApi = nombreApi;
        this.urlServe = "http://localhost:8000/api/";
        this.baseUrl = this.urlServe + this.nombreApi;
    }

    getApiList = () => {
        return this.baseUrl + "/listar";
    };

    save = async (data, nombreApi = this.nombreApi) => {
        const urlSave = this.urlServe + nombreApi + "/agregar";
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

    list = async (nombreApi = this.nombreApi) => {
        const urlList = this.urlServe + nombreApi + "/listar";
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

    get = async (id, nombreApi = this.nombreApi) => {
        const urlGet = this.urlServe + nombreApi + "/get/" + id;
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

    update = async data => {
        const urlUpdate = this.baseUrl + "/actualizar/" + data.id;
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

    updateData = async data => {
        const urlUpdate = this.baseUrl + "/actualizar";
        const res = await axios
            .post(urlUpdate, data)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            });
        return res;
    };

    delete = async id => {
        const urlDelete = this.baseUrl + "/eliminar/" + id;
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
}
export default Service;
