import ApiEndPoints from '../config/apiEndPoints';

class AxiosHelper {
  apiUrlGenerator;
  tokenBearer = '';
  headerConfiguration;
  is401Redirect = false;

  constructor () {
    this.apiUrlGenerator = new ApiEndPoints();
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
}

export default AxiosHelper;
