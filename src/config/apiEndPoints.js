class ApiEndPoints {

  createApiUrl(endPoint) {
    let apiHost = 'http://localhost:';
    let apiPort = '30001';
    let prodUrl = 'https://cams-sanchez-be.herokuapp.com';
    let apiUrl = apiHost + apiPort;

    console.log("PRocess Env Vars", process.env);
    if(process.env.REACT_APP_USE_PROD_URL === "true") {
      console.log("Seems we're in prod going to use Prod URL");
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

  getAllTiposDeGasto(){
    return this.createApiUrl('/catalogs/tiposdegasto');
  }

  setNewTipoGasto(){
    return this.createApiUrl('/catalogs/tiposdegasto/new');
  }

  editTipoGasto(){
    return this.createApiUrl('/catalogs/tiposdegasto/update');
  }

  deleteTipoGasto(){
    return this.createApiUrl('/catalogs/tiposdegasto/delete');
  }

  getAllEstablecimientos(){
    return this.createApiUrl('/catalogs/establecimiento');
  }

  setNewEstablecimiento(){
    return this.createApiUrl('/catalogs/establecimiento/new');
  }

  editEstablecimiento(){
    return this.createApiUrl('/catalogs/establecimiento/update');
  }

  deleteEstablecimiento(){
    return this.createApiUrl('/catalogs/establecimiento/delete');
  }

  getEstadosRepublica(){
    return this.createApiUrl('/catalogs/estadosrepublica');
  }

  getTipoEstablecimientos(){
    return this.createApiUrl('/catalogs/tipoestablecimiento');
  }
}

export default ApiEndPoints;
