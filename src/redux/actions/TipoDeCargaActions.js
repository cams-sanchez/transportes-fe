
const TipoDeCargaActions = {
  openModal: () =>{
    return {
      type:'OpenModal',
    }
  },
  closeModal: () => {
    return {
      type:'CloseModal'
    }
  },
  setCurrentItem: (currentItem) => {
    return {
      type:'SetCurrentItem',
      payload: currentItem,
    }
  },
  getAllItems: () => {
    return {
      type:'GetAllItems'
    }
  },
  setAllTiposDeCarga: (allTiposDeCarga) => {
    return {
      type:'SetAllTiposDeCarga',
      payload: allTiposDeCarga,
    }
  },
};

export default TipoDeCargaActions;

