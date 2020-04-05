
const initialState = {
  allTiposDeCarga: [],
  nombre:'',
  unidadMetrica:'',
  descripcion:'',
};

const tipoDeCargaReducer = (state = initialState, action) => {
  switch (action.type) {
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
