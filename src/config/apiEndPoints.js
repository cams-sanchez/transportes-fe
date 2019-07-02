class ApiEndPoints {

  createApiUrl(endPoint) {
    let apiUrl = 'http://localhost:';
    let apiPort = '30001';

    return apiUrl + apiPort + endPoint;
  }

  loginUser() {
    let urlApi = this.createApiUrl('/users/authenticate');
    console.log("API CALL ", urlApi);
    return urlApi;
  }

  getAllTiposDeCarga(){
    return this.createApiUrl('/catalogs/tiposdecarga');
  }
}

export default ApiEndPoints;
