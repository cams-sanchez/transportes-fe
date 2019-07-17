
const initialState = {
  modalIsOpen:false,
  currentItem: {},
  allTiposDeCarga: [],
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
    case 'GetAllItems':
      return {
        ...state,
      };
    case 'SetAllTiposDeCarga':
      return {
        ...state,
        allTiposDeCarga:action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default tipoDeCargaReducer;
