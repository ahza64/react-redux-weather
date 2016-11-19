import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //cannot mutate state, concat builds a new array
      //return state.concat([ action. payload.data ]);
      //almost exactly the same as above
      return [ action.payload.data, ...state ];
  }
  return state;
}
