import EndPointFactory from './EndPointFactory';

class TipoMantenimientoEndPoints extends EndPointFactory{

  getAllTiposMantenimiento(){
    return this.createApiUrl('/catalogs/tipomantenimiento');
  }

  setNewTipoMantenimiento(){
    return this.createApiUrl('/catalogs/tipomantenimiento/new');
  }

  editTipoMantenimiento(){
    return this.createApiUrl('/catalogs/tipomantenimiento/update');
  }

  deleteTipoMantenimiento(){
    return this.createApiUrl('/catalogs/tipomantenimiento/delete');
  }
}

export default TipoMantenimientoEndPoints;
