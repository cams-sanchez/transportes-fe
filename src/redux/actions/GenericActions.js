
const GenericActions = {
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
};

export default GenericActions;

