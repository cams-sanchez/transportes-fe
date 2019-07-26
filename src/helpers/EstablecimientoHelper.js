import AxiosHelper from './AxiosHelper';
import EstablecimientoEndPoints from '../config/EstablecimientoEndPoints';
import axios from 'axios';

class EstablecimientoHelper extends AxiosHelper {

  establecimientos;
  tipoEstablecimientos;

  constructor () {
    super();
    this.establecimientos = {};
    this.tipoEstablecimientos = [];
    this.apiUrlGenerator = new EstablecimientoEndPoints();
  }

  postEstablecimiento = async (newEstablecimiento) => {
    let urlApi = this.apiUrlGenerator.setNewEstablecimiento();

    return await axios.post(
      urlApi,
      newEstablecimiento,
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

  getEstablecimientos = async () => {
    let apiCall = this.apiUrlGenerator.getAllEstablecimientos();
    return await axios.get(
      apiCall,
      this.headerConfiguration,
    ).then( response => {
      if(response.data.success === true) {
        this.establecimientos = response.data.data;
        return true;
      }
    }).catch(error => {
      this.check401Error(error);
      return false;
    });
  };

  putEstablecimiento = async(establecimiento) =>{
    let urlApi = this.apiUrlGenerator.editEstablecimiento();

    return await axios.put(
      urlApi,
      establecimiento,
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

  deleteEstablecimiento = async(establecimiento) =>{
    let urlApi = this.apiUrlGenerator.deleteEstablecimiento();
    console.log("Item To Delete ", establecimiento, this.headerConfiguration);
    return await axios({
      url:urlApi,
      method:'delete',
      data : establecimiento,
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

  getTipoEstablecimientos = async () => {
    let apiCall = this.apiUrlGenerator.getTipoEstablecimientos();
    return await axios.get(
      apiCall,
      this.headerConfiguration,
    ).then( response => {
      if(response.data.success === true) {
        this.tipoEstablecimientos = response.data.data;
        return true;
      }
    }).catch(error => {
      this.check401Error(error);
      return false;
    });
  };
}

export default EstablecimientoHelper
