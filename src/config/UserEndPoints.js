import EndPointFactory from './EndPointFactory';

class UserEndPoints extends EndPointFactory{

  loginUser() {
    let urlApi = this.createApiUrl('/users/login');
    console.log("API CALL ", urlApi);
    return urlApi;
  }

  userInfoFromToken() {
    let urlApi = this.createApiUrl('/users/infoFromToken');
    return urlApi;
  }
}

export default UserEndPoints;
