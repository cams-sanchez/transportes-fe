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

    return await axios.post(
      urlApi,
      newTipoCarga,
      this.headerConfiguration
    ).then(res => {
      if(res.data.success === true) {
        return true;
      }
    }).catch(error => {
        this.check401Error(error);
        return false;
    });
  };

  getTiposDeCarga = async () => {
    let apiCall = this.apiUrlGenerator.getAllTiposDeCarga();
    return await axios.get(
      apiCall,
      this.headerConfiguration,
    ).then( response => {
      if(response.data.success === true) {
        this.tiposDeCarga = response.data.data;
        return true;
      }
    }).catch(error => {
      this.check401Error(error);
      return false;
    });
  };

  putTipoDeCarga = async(tipoDeCarga) =>{
    let urlApi = this.apiUrlGenerator.editTipoCarga();

    return await axios.put(
      urlApi,
      tipoDeCarga,
      this.headerConfiguration
    ).then(res => {
      if(res.data.success === true) {
        return true;
      }
    }).catch(error => {
      this.check401Error(error);
      return false;
    });
  };

  deleteTipoDeCarga = async(tipoDeCarga) =>{
    let urlApi = this.apiUrlGenerator.deleteTipoCarga();
    console.log("Item To Delete ", tipoDeCarga, this.headerConfiguration);
    return await axios({
      url:urlApi,
      method:'delete',
      data : tipoDeCarga,
      headers: {
        'Authorization': 'Bearer ' + this.tokenBearer,
      }
    }).then(res => {
      if(res.data.success === true) {
        return true;
      }
    }).catch(error => {
      this.check401Error(error);
      return false;
    });
  };
}

export default TiposDeCargaHelper
