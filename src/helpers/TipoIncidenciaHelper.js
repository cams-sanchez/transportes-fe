import AxiosHelper from './AxiosHelper';
import TipoIncidenciaEndPoints from '../config/TipoIncidenciaEndPoints';
import axios from 'axios';

class TipoIncidenciaHelper extends AxiosHelper {

  tipoIncidencia;

  constructor () {
    super();
    this.tipoIncidencia = {};
    this.apiUrlGenerator = new TipoIncidenciaEndPoints();
  }

  postTipoIncidencia = async (newIncidencia) => {
    let urlApi = this.apiUrlGenerator.setNewTipoIncidencia();

    return await axios.post(
      urlApi,
      newIncidencia,
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

  getTipoIncidencia = async () => {
    let apiCall = this.apiUrlGenerator.getAllTiposIncidencia();
    return await axios.get(
      apiCall,
      this.headerConfiguration,
    ).then( response => {
      if(response.data.success === true) {
        this.tipoIncidencia = response.data.data;
        return true;
      }
    }).catch(error => {
      this.check401Error(error);
      return false;
    });
  };

  putTipoIncidencia = async(incidencia) =>{
    let urlApi = this.apiUrlGenerator.editTipoIncidencia();

    return await axios.put(
      urlApi,
      incidencia,
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

  deleteTipoIncidencia = async(incidencia) =>{
    let urlApi = this.apiUrlGenerator.deleteTipoIncidencia();

    return await axios({
      url:urlApi,
      method:'delete',
      data : incidencia,
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

export default TipoIncidenciaHelper
