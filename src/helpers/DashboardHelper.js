import TirosEndPoints from '../config/TirosEndPoints'
import TrenEndPoints from '../config/TrenEndPoints'
import axios from 'axios';
import AxiosHelper from './AxiosHelper';

class DashboardHelper extends AxiosHelper {

  constructor () {
    super();
    this.dashboardTrenes = {};
    this.dashboardTiros = {};
    this.apiUrlGeneratorTiros = new TirosEndPoints();
    this.apiUrlGeneratorTren = new TrenEndPoints();
  }

  getDashboardActiveTrenes = async () => {
    let apiCall = this.apiUrlGeneratorTren.getAllActiveTrenes();
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
}

export default DashboardHelper
