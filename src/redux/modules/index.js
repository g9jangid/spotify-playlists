import {combineReducers} from 'redux';
import auth from './auth/reducer';
import featuredPlaylist from './featuredPlaylist/reducer';
import userPlaylist from './userPlaylist/reducer';

export default combineReducers({
  auth,
  featuredPlaylist,
  userPlaylist
});
