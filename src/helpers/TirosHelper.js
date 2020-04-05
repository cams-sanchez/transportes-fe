import AxiosHelper from './AxiosHelper';
import TiroEndPoints from '../config/TirosEndPoints';
import axios from 'axios';

class TirosHelper extends AxiosHelper {

    tiros;

    constructor() {
        super();
        this.tiros = {};
        this.apiUrlGenerator = new TiroEndPoints();
    }

    postTiro = async (newMant) => {
        let urlApi = this.apiUrlGenerator.setNewTiro();

        return await axios.post(
            urlApi,
            newMant,
            this.headerConfiguration
        ).then(res => {
            if (res.data.success === true) {
                return true;
            }
        }).catch(error => {
            this.check401Error(error);
            return false;
        });
    };

    getTiros = async () => {
        let apiCall = this.apiUrlGenerator.getAllTiros();
        return await axios.get(
            apiCall,
            this.headerConfiguration,
        ).then(response => {
            if (response.data.success === true) {
                this.tiros = response.data.data;
                return true;
            }
        }).catch(error => {
            this.check401Error(error);
            return false;
        });
    };

    putTiro = async (mant) => {
        let urlApi = this.apiUrlGenerator.editTiro();

        return await axios.put(
            urlApi,
            mant,
            this.headerConfiguration
        ).then(res => {
            if (res.data.success === true) {
                return true;
            }
        }).catch(error => {
            this.check401Error(error);
            return false;
        });
    };

    deleteTiro = async (mant) => {
        let urlApi = this.apiUrlGenerator.deleteTiro();

        return await axios({
            url: urlApi,
            method: 'delete',
            data: mant,
            headers: {
                'Authorization': 'Bearer ' + this.tokenBearer,
            }
        }).then(res => {
            if (res.data.success === true) {
                return true;
            }
        }).catch(error => {
            this.check401Error(error);
            return false;
        });
    };

    postUploadExcel = async (newExcel) => {
        let urlApi = this.apiUrlGenerator.uploadExcelFile();

        return await axios.post(
            urlApi,
            newExcel,
            this.headerFileUploadConfiguration
        ).then(res => {
            if (res.data.success === true) {
                return true;
            }
        }).catch(error => {
            this.check401Error(error);
            return false;
        });
    };

    getTiroByDelivery = async (tiroToFind) => {
        let urlApi = this.apiUrlGenerator.getTirosByDelivery();
        urlApi+= tiroToFind.deliveryNumber;
        console.log("URL TO ACCESS ",urlApi);
        return await axios.get(
            urlApi,
            this.headerConfiguration
        ).then(res => {
            console.log("Response from server ", res.data);
            if (res.data.success === true) {
                this.tiros = res.data.tiro;
                return true;
            }
        }).catch(error => {
            this.check401Error(error);
            return false;
        });
    };
}

export default TirosHelper
