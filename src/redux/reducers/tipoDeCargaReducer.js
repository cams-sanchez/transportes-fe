
const initialState = {
  modalIsOpen:false,
  currentItem: {},
  tipoDeCarga: [],
  nombre:'',
  unidadMetrica:'',
  descripcion:'',
};

const tipoDeCargaReducer = (state = initialState, action) => {
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
    case 'GetCurrentItem':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default tipoDeCargaReducer;
