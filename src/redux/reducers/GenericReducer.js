
const initialState = {
  modalIsOpen:false,
  currentItem: {},
  estadosRepublica: [],
};

const GenericReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OpenModal':
      return {
        ...state,
        modalIsOpen: true,
      };
    case 'CloseModal':
      return {
        ...state,
        modalIsOpen: false,
      };
    case 'SetCurrentItem':
      return {
        ...state,
        currentItem: action.payload,
      };
    case 'SetEstadosRepublica':
      return {
        ...state,
        estadosRepublica: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default GenericReducer;
