import GenericEndPoints from '../config/GenericEndPoints';
import axios from 'axios';
import LocalStorageHelper from "./LolcalStorageHelper";

class AxiosHelper {
    apiUrlGenerator;
    tokenBearer = '';
    headerConfiguration;
    headerFileUploadConfiguration;
    is401Redirect = false;
    estadosRepublica = [];
    localStorageHelper;

    constructor() {
        this.apiUrlGenerator = new GenericEndPoints();
        this.localStorageHelper = new LocalStorageHelper();
        this.getTokenBearer();
        this.setHeaderConfiguration();
        this.setUploadHeaderConfiguration();
    }

    setHeaderConfiguration = () => {
        this.headerConfiguration = {
            headers: {
                'Authorization': 'Bearer ' + this.tokenBearer,
            }
        };
    };

    setUploadHeaderConfiguration = () => {
        this.headerFileUploadConfiguration = {
            headers: {
                'Authorization': 'Bearer ' + this.tokenBearer,
                'Content-Type': 'multipart/form-data',
            }
        };
    };

    getTokenBearer = () => {
        this.tokenBearer = this.localStorageHelper.getValueForKey('jwt');
    };

    check401Error = (error) => {
        if (error.response.status === 401) {
            this.is401Redirect = true;
        }
    };

    getEstadosRepublica = async () => {
        let apiCall = this.apiUrlGenerator.getEstadosRepublica();
        return await axios.get(
            apiCall,
            this.headerConfiguration,
        ).then(response => {
            if (response.data.success === true) {
                this.estadosRepublica = response.data.data;
                return true;
            }
        }).catch(error => {
            this.check401Error(error);
            return false;
        });
    };
}

export default AxiosHelper;
