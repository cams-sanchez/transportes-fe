
const tipoDeCargaActions = {
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
  getCurrentItem: () => {
    return {
      type:'GetCurrentItem'
    }
  },
};

export default tipoDeCargaActions;

