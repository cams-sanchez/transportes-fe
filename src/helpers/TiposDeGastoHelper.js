import AxiosHelper from './AxiosHelper';
import TipoGastoEndPoints from '../config/TipoGastoEndPoints';
import axios from 'axios';

class TiposDeGastoHelper extends AxiosHelper {

  tiposDeGasto;

  constructor () {
    super();
    this.tiposDeGasto = {};
    this.apiUrlGenerator = new TipoGastoEndPoints();
  }

  postTipoDeGasto = async (newTipoGasto) => {
    let urlApi = this.apiUrlGenerator.setNewTipoGasto();

    return await axios.post(
      urlApi,
      newTipoGasto,
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

  getTiposDeGasto = async () => {
    let apiCall = this.apiUrlGenerator.getAllTiposDeGasto();
    return await axios.get(
      apiCall,
      this.headerConfiguration,
    ).then( response => {
      if(response.data.success === true) {
        this.tiposDeGasto = response.data.data;
        return true;
      }
    }).catch(error => {
      this.check401Error(error);
      return false;
    });
  };

  putTipoDeGasto = async(tipoDeGasto) =>{
    let urlApi = this.apiUrlGenerator.editTipoGasto();

    return await axios.put(
      urlApi,
      tipoDeGasto,
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

  deleteTipoDeGasto = async(tipoDeGasto) =>{
    let urlApi = this.apiUrlGenerator.deleteTipoGasto();
    console.log("Item To Delete ", tipoDeGasto, this.headerConfiguration);
    return await axios({
      url:urlApi,
      method:'delete',
      data : tipoDeGasto,
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

export default TiposDeGastoHelper
