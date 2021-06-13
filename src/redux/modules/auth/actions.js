export const REQUEST_ACCESS_TOKEN = 'auth/requestAccessToken';
export const SET_ACCESS_TOKEN = 'auth/setAccessToken';

export const requestAccessToken = (payload = {}) => ({
  type: REQUEST_ACCESS_TOKEN,
  payload,
});

export const setAccessToken = (payload = []) => ({
  type: SET_ACCESS_TOKEN,
  payload,
});
