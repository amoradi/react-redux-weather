import { FETCH_WEATHER } from '../actions/index';

// never MUTATE state, always return an additive of state
// for Arrays, concat over push
export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return [action.payload.data, ...state]; 
  }
  return state;
}