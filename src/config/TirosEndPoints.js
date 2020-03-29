import EndPointFactory from './EndPointFactory';

class TirosEndPoints extends EndPointFactory{

  getAllTiros(){
    return this.createApiUrl('/tiros/');
  }

  setNewTiro(){
    return this.createApiUrl('/tiros/new');
  }

  editTiro(){
    return this.createApiUrl('/tiros/update');
  }

  deleteTiro(){
    return this.createApiUrl('/tiros/delete');
  }

  uploadImagesToTiro(){
    return this.createApiUrl('/tiros/upload');
  }

  uploadExcelFile(){
    return this.createApiUrl('/tiros/excel');
  }
}

export default TirosEndPoints;
