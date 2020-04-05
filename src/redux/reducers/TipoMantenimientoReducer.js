
const initialState = {
  allMantenimientos: [],
  nombre:'',
  descripcion:'',
  kilometros:'',
  cambiosARealizar:'',
};

const TipoMantenimientoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SetMantenimientos':
      return {
        ...state,
        allMantenimientos:action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default TipoMantenimientoReducer;
