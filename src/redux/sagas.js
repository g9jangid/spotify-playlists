import {all} from 'redux-saga/effects';
import {sagas as auth} from './modules/auth/saga';
import {sagas as featuredPlaylist} from './modules/featuredPlaylist/saga';

export default function* rootSaga() {
  yield all([...auth,...featuredPlaylist].map((func) => func()).concat());
}
