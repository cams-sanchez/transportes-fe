import AxiosHelper from './AxiosHelper';
import axios from 'axios';

class TiposDeCargaHelper extends AxiosHelper {

  tiposDeCarga;

  constructor () {
    super();
    this.tiposDeCarga = {};
  }

  postTipoDeCarga = async (newTipoCarga) => {
    let urlApi = this.apiUrlGenerator.setNewTipoCarga();

    let response = await axios.post(
      urlApi,
      newTipoCarga,
      this.headerConfiguration
    );

    return this.checkResponse(response);
  };

  getTiposDeCarga = async () => {
    let apiCall = this.apiUrlGenerator.getAllTiposDeCarga();
    console.log("In Method", apiCall);
    console.log("Header Config", this.headerConfiguration);
    await axios.get(
      apiCall,
      this.headerConfiguration,
    ).then( response => {
      if(response.data.success === true) {
        this.tiposDeCarga = response.data.data;
      }
      console.log("RESPONSE",response.data);
      return true;
    }).catch(error => {
      console.log('ERROR RESPPNSE There was an error ', error);
      if(error.response.status === 401){
        console.log("UnAuthorized Token");
        this.is401Redirect = true;
        return false;
      }
    });
  };
}

export default TiposDeCargaHelper
