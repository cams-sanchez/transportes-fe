class EndPointFactory {

  createApiUrl(endPoint) {
    console.log(`PROCESS ENV ${process.env}`);
    let apiHost = process.env.REACT_APP_LOCAL_API_URL;
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
