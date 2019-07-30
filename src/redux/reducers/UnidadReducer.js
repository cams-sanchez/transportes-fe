
const initialState = {
  unidades: [],
  nombre:'',
  marca: '',
  tipo: '',
  tonelaje: '',
  mantenimientosRealizados: [],
  kilometraje: [],
  estatus: 'EN ESPERA'
};

const UnidadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SetUnidadess':
      return {
        ...state,
        unidades:action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UnidadReducer;
