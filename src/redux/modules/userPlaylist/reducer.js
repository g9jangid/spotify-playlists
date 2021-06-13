import {SET_USER_PLAYLIST,CLEAR_USER_PLAYLIST} from './actions';

let initialState = {
  playlists : [],
}
const reducer = (state = initialState, {payload, type}) => {
  switch (type) {
    case SET_USER_PLAYLIST:
      return {...state, playlists : !!state.playlists.length ? [...state.playlists,payload] : [payload]}
    case CLEAR_USER_PLAYLIST:
      return {...state, playlists : []}
    default:
      return state;
  }
};

export default reducer;