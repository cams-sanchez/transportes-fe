import EndPointFactory from './EndPointFactory';

class UserEndPoints extends EndPointFactory{

  loginUser() {
    let urlApi = this.createApiUrl('/api/users/login');
    console.log("API CALL ", urlApi);
    return urlApi;
  }

  userInfoFromToken() {
    let urlApi = this.createApiUrl('/api/users/infoFromToken');
    return urlApi;
  }
}

export default UserEndPoints;
