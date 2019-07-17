import tipoDeCargaReducer from './TipoDeCargaReducer';
import UserLoginReducer from './UserLoginReducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
  tipoDeCargaReducer,
  UserLoginReducer,
});

export default allReducers;

