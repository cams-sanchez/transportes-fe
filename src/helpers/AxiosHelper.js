import GenericEndPoints from '../config/GenericEndPoints';
import axios from 'axios';

class AxiosHelper {
  apiUrlGenerator;
  tokenBearer = '';
  headerConfiguration;
  is401Redirect = false;
  estadosRepublica = [];

  constructor () {
    this.apiUrlGenerator = new GenericEndPoints();
    this.getTokenBearer();
    this.setHeaderConfiguration();
  }

  setHeaderConfiguration = () => {
    this.headerConfiguration = {
      headers: {
        'Authorization': 'Bearer ' + this.tokenBearer,
      }
    };
  };

  getTokenBearer = () => {
    this.tokenBearer = localStorage.getItem('jwt');
  };

  check401Error = (error) => {
    if(error.response.status === 401){
      this.is401Redirect = true;
    }
  };

  getEstadosRepublica = async () => {
    let apiCall = this.apiUrlGenerator.getEstadosRepublica();
    return await axios.get(
      apiCall,
      this.headerConfiguration,
    ).then( response => {
      if(response.data.success === true) {
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
