class ApiEndPoints {

  createApiUrl(endPoint) {
    let apiHost = 'http://localhost:';
    let apiPort = '30001';
    let prodUrl = 'https://transportes-cams-sanchez.herokuapp.com';
    let apiUrl = apiHost + apiPort;

    if(process.env.PORT) {
      apiUrl = prodUrl;
    }
    return  apiUrl + endPoint;
  }

  loginUser() {
    let urlApi = this.createApiUrl('/users/authenticate');
    console.log("API CALL ", urlApi);
    return urlApi;
  }

  userInfoFromToken() {
    let urlApi = this.createApiUrl('/users/infoFromToken');
    return urlApi;
  }

  getAllTiposDeCarga(){
    return this.createApiUrl('/catalogs/tiposdecarga');
  }

  setNewTipoCarga(){
    return this.createApiUrl('/catalogs/tiposdecarga/new');
  }

  editTipoCarga(){
    return this.createApiUrl('/catalogs/tiposdecarga/update');
  }

  deleteTipoCarga(){
    return this.createApiUrl('/catalogs/tiposdecarga/delete');
  }
}

export default ApiEndPoints;
