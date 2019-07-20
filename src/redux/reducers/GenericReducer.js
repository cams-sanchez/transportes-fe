
const initialState = {
  modalIsOpen:false,
  currentItem: {},
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
    default:
      return {
        ...state,
      };
  }
};

export default GenericReducer;
