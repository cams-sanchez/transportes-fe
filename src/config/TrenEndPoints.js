import EndPointFactory from './EndPointFactory';

class TrenEndpoints extends EndPointFactory{

  getAllActiveTrenes(){
    return this.createApiUrl('/trenes/');
  }
}

export default TrenEndpoints;
