import AxiosHelper from './AxiosHelper';
import TipoMantenimientoEndPoints from '../config/TipoMantenimientoEndPoints';
import axios from 'axios';

class TipoMantenimientoHelper extends AxiosHelper {

  tipoMantenimiento;

  constructor () {
    super();
    this.tipoMantenimiento = {};
    this.apiUrlGenerator = new TipoMantenimientoEndPoints();
  }

  postTipoMantenimiento = async (newMant) => {
    let urlApi = this.apiUrlGenerator.setNewTipoMantenimiento();

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

  getTipoMantenimiento = async () => {
    let apiCall = this.apiUrlGenerator.getAllTiposMantenimiento();
    return await axios.get(
      apiCall,
      this.headerConfiguration,
    ).then( response => {
      if(response.data.success === true) {
        this.tipoMantenimiento = response.data.data;
        return true;
      }
    }).catch(error => {
      this.check401Error(error);
      return false;
    });
  };

  putTipoMantenimiento = async(mant) =>{
    let urlApi = this.apiUrlGenerator.editTipoMantenimiento();

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

  deleteTipoMantenimiento = async(mant) =>{
    let urlApi = this.apiUrlGenerator.deleteTipoMantenimiento();

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

export default TipoMantenimientoHelper
