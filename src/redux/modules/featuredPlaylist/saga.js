import {Playlist} from 'api/';
import {call, put, takeLatest, select} from 'redux-saga/effects';
import {
  REQUEST_FEATURED_PLAYLIST,
  requestfeaturedPlaylist,
  setfeaturedPlaylist,
  setError,
  setIsFetching,
} from './actions';
import {getAccessTokenWorker} from 'redux/modules/auth/saga';

function* getFeaturedPlaylists() {
  yield put(setIsFetching({data: true}));
  try {
    let access_token = yield select((state) => state.auth.access_token);
    const {response} = yield call(Playlist.getFeaturedPlaylist, access_token);
    let {status, data} = response;

    if (status === 200) {
      yield put(setfeaturedPlaylist({data: data.playlists.items}));
      yield put(setError({data: ''}));
    } else if (status === 401) {
      yield getAccessTokenWorker();
      yield put(requestfeaturedPlaylist());
    } else {
      yield put(
        setError({data: 'Failed to fetch featured playlists from Spotify server.'})
      );
    }
    yield put(setIsFetching({data: false}));
  } catch (error) {
    //error : something went wrong, log this error to track error reporting
    yield put(setError({data: 'Something went wrong.'}));
    yield put(setIsFetching({data: false}));
  }
}

function* watchRequestFeaturedPlaylists() {
  yield takeLatest(REQUEST_FEATURED_PLAYLIST, getFeaturedPlaylists);
}

export const sagas = [watchRequestFeaturedPlaylists];
