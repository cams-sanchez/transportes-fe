import tipoDeCargaReducer from './TipoDeCargaReducer';
import UserLoginReducer from './UserLoginReducer';
import TipoDeGastoReducer from './TipoDeGastoReducer';
import GenericReducer from './GenericReducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
  tipoDeCargaReducer,
  UserLoginReducer,
  TipoDeGastoReducer,
  GenericReducer,
});

export default allReducers;

