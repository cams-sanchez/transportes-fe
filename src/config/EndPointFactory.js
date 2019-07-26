class EndPointFactory {

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
}

export default EndPointFactory;
