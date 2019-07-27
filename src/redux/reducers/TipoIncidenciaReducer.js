
const initialState = {
  allIncidencias: [],
  nombre:'',
  bloquealaRuta: 'No',
  descripcion:'',
};

const TipoIncidenciaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SetIncidencias':
      return {
        ...state,
        allIncidencias:action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default TipoIncidenciaReducer;
