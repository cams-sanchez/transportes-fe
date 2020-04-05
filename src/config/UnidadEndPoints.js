import EndPointFactory from './EndPointFactory';

class UnidadEndPoints extends EndPointFactory{

  getAllUnidad(){
    return this.createApiUrl('/unidad/');
  }

  setNewUnidad(){
    return this.createApiUrl('/unidad/new');
  }

  editUnidad(){
    return this.createApiUrl('/unidad/update');
  }

  deleteUnidad(){
    return this.createApiUrl('/unidad/delete');
  }
}

export default UnidadEndPoints;
