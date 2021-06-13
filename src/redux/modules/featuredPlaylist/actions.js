export const REQUEST_FEATURED_PLAYLIST = 'featuredPlaylist/requestfeaturedPlaylist';
export const SET_FEATURED_PLAYLIST = 'featuredPlaylist/setfeaturedPlaylist';
export const SET_ERROR = 'featuredPlaylist/setError';
export const SET_IS_FETCHING = 'featuredPlaylist/setIsFetching';

export const requestfeaturedPlaylist = (payload = {}) => ({
  type: REQUEST_FEATURED_PLAYLIST,
  payload,
});

export const setfeaturedPlaylist = (payload = []) => ({
  type: SET_FEATURED_PLAYLIST,
  payload,
});

export const setError = (payload = {}) => ({
  type: SET_ERROR,
  payload,
});

export const setIsFetching = (payload = {}) => ({
  type: SET_IS_FETCHING,
  payload,
});