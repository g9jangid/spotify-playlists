import {Auth} from 'api/';
import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_ACCESS_TOKEN, setAccessToken} from './actions';

export function* getAccessTokenWorker() {
  try {
    const {response} = yield call(Auth.getAccessToken);
    if (!!response) {
      yield put(setAccessToken({data: response.access_token}));
    } else {
      //error : something went wrong
    }
  } catch (error) {
    //error : something went wrong
  }
}

function* watchRequestAccessToken() {
  yield takeLatest(REQUEST_ACCESS_TOKEN, getAccessTokenWorker);
}

export const sagas = [watchRequestAccessToken];
