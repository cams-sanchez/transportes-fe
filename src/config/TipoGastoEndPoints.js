import EndPointFactory from './EndPointFactory';

class TipoGastoEndPoints extends EndPointFactory{

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
}

export default TipoGastoEndPoints;
