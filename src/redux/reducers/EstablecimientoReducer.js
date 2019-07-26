
const initialState = {
  allEstablecimientos: [],
  allTipoEstablecimientos: [],
  nombreEstablecimiento: '',
  tipoEstablecimiento: '',
  direccion: '',
  colonia: '',
  cp: '',
  estado: '',
  municipio: '',
};

const EstablecimientoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SetAllEstablecimientos':
      return {
        ...state,
        allEstablecimientos:action.payload,
      };
    case 'SetAllTipoEstablecimientos':
      return {
        ...state,
        allTipoEstablecimientos:action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default EstablecimientoReducer;
