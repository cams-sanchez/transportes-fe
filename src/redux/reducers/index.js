import tipoDeCargaReducer from './TipoDeCargaReducer';
import UserLoginReducer from './UserLoginReducer';
import TipoDeGastoReducer from './TipoDeGastoReducer';
import GenericReducer from './GenericReducer';
import EstablecimientoReducer from './EstablecimientoReducer';
import TipoMantenimientoReducer from './TipoMantenimientoReducer'
import TipoIncidenciaReducer from './TipoIncidenciaReducer'

import {combineReducers} from 'redux';

const allReducers = combineReducers({
  tipoDeCargaReducer,
  UserLoginReducer,
  TipoDeGastoReducer,
  GenericReducer,
  EstablecimientoReducer,
  TipoMantenimientoReducer,
  TipoIncidenciaReducer
});

export default allReducers;

