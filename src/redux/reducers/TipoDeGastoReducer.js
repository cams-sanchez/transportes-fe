
const initialState = {
  allTiposDeGasto: [],
  nombre:'',
  descripcion:'',
};

const TipoDeGastoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SetAllTiposDeGasto':
      return {
        ...state,
        allTiposDeGasto:action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default TipoDeGastoReducer;
