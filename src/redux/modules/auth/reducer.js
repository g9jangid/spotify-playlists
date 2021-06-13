import {SET_ACCESS_TOKEN} from './actions';

const reducer = (state = {}, {payload, type}) => {
  switch (type) {
    case SET_ACCESS_TOKEN:
      return {...state, access_token: payload.data};
    default:
      return state;
  }
};

export default reducer;
