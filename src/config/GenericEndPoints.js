import EndPointFactory from './EndPointFactory';

class GenericEndPoints extends EndPointFactory{

  getEstadosRepublica(){
    return this.createApiUrl('/catalogs/estadosrepublica');
  }
}

export default GenericEndPoints;
