import EndPointFactory from './EndPointFactory';

class TipoCargaEndPoints extends EndPointFactory{

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
}

export default TipoCargaEndPoints;
