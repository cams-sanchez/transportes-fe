class EndPointFactory {

  createApiUrl(endPoint) {
    let apiHost = 'http://transportes.com';
    let apiPort = ':80';
    let prodUrl = 'https://transportes-be-laravel.herokuapp.com';
    let apiUrl = apiHost + apiPort + '/api';


    console.log("PRocess Env Vars", process.env);
    if(process.env.REACT_APP_USE_PROD_URL === "true") {
      console.log("Seems we're in prod going to use Prod URL");
      apiUrl = prodUrl + '/api';
    }
    return  apiUrl + endPoint;
  }
}

export default EndPointFactory;
