import EndPointFactory from './EndPointFactory';

class EstablecimientoEndPoints extends EndPointFactory {
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

  getTipoEstablecimientos(){
    return this.createApiUrl('/catalogs/tipoestablecimiento');
  }

  setNewTipoEstablecimiento(){
    return this.createApiUrl('/catalogs/tipoestablecimiento/new');
  }

  editTipoEstablecimiento(){
    return this.createApiUrl('/catalogs/tipoestablecimiento/update');
  }

  deleteTipoEstablecimiento(){
    return this.createApiUrl('/catalogs/tipoestablecimiento/delete');
  }
}

export default EstablecimientoEndPoints;
