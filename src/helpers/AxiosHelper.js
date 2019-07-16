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

  checkResponse = (response) => {
    console.log("In Check Response", response);
    switch (response.status) {
      case 200:
        return true;
      default:
        if (typeof response.response !== 'undefined' && response.response.status === 401) {
          console.log("We got 401");
          this.is401Redirect = true;
        }
        return false;
    }
  };
}

export default AxiosHelper;
