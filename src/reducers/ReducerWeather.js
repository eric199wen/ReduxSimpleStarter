import { FETCH_WEATHER } from "../actions/index";

// don't mutate state all the time
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      // ES6 syntax sugar, insert the element at the top of the array
      return [ action.payload.data, ...state ];
  
    default:
      break;
  }
  return state;
};