export const SET_USER_PLAYLIST = 'userPlaylist/setUserPlaylist';
export const CLEAR_USER_PLAYLIST = 'userPlaylist/clearUserPlaylist';

export const setUserPlaylist = (payload = {}) => ({
  type: SET_USER_PLAYLIST,
  payload,
});

export const clearUserPlaylist = (payload = {}) => ({
  type: CLEAR_USER_PLAYLIST,
  payload,
});

