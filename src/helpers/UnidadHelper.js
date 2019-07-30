import AxiosHelper from './AxiosHelper';
import UnidadEndPoints from '../config/UnidadEndPoints';
import axios from 'axios';

class UnidadHelper extends AxiosHelper {

  unidades;

  constructor () {
    super();
    this.unidades = {};
    this.apiUrlGenerator = new UnidadEndPoints();
  }

  postUnidad = async (newMant) => {
    let urlApi = this.apiUrlGenerator.setNewUnidad();

    return await axios.post(
      urlApi,
      newMant,
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

  getUnidades = async () => {
    let apiCall = this.apiUrlGenerator.getAllUnidad();
    return await axios.get(
      apiCall,
      this.headerConfiguration,
    ).then( response => {
      if(response.data.success === true) {
        this.unidades = response.data.data;
        return true;
      }
    }).catch(error => {
      this.check401Error(error);
      return false;
    });
  };

  putUnidad = async(mant) =>{
    let urlApi = this.apiUrlGenerator.editUnidad();

    return await axios.put(
      urlApi,
      mant,
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

  deleteUnidad = async(mant) =>{
    let urlApi = this.apiUrlGenerator.deleteUnidad();

    return await axios({
      url:urlApi,
      method:'delete',
      data : mant,
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

export default UnidadHelper
