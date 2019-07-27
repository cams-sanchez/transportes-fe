import EndPointFactory from './EndPointFactory';

class TipoIncidenciaEndPoints extends EndPointFactory{

  getAllTiposIncidencia(){
    return this.createApiUrl('/catalogs/tipoincidencia');
  }

  setNewTipoIncidencia(){
    return this.createApiUrl('/catalogs/tipoincidencia/new');
  }

  editTipoIncidencia(){
    return this.createApiUrl('/catalogs/tipoincidencia/update');
  }

  deleteTipoIncidencia(){
    return this.createApiUrl('/catalogs/tipoincidencia/delete');
  }
}

export default TipoIncidenciaEndPoints;
