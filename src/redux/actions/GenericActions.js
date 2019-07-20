const GenericActions = {
  openModal: () => {
    return {
      type: 'OpenModal',
    };
  },
  closeModal: () => {
    return {
      type: 'CloseModal'
    };
  },
  setCurrentItem: (currentItem) => {
    return {
      type: 'SetCurrentItem',
      payload: currentItem,
    };
  },
  setEstadosRepublica: (estadosRepublica) => {
    return {
      type: 'SetEstadosRepublica',
      payload: estadosRepublica,
    };
  }
};

export default GenericActions;

