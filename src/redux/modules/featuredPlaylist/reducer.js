import {SET_FEATURED_PLAYLIST, SET_ERROR, SET_IS_FETCHING} from './actions';

let initialState = {
  playlists: [],
  error: '',
  isFetching: false,
};
const reducer = (state = initialState, {payload, type}) => {
  switch (type) {
    case SET_FEATURED_PLAYLIST:
      return {...state, playlists: payload.data};
    case SET_ERROR:
      return {...state, error: payload.data};
    case SET_IS_FETCHING:
      return {...state, isFetching: payload.data};
    default:
      return state;
  }
};

export default reducer;
