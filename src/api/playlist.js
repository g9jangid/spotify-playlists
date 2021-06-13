import axios from 'axios';

export const getFeaturedPlaylist = (access_token) => {
  return axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/featured-playlists?limit=50',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
  })
    .then((response) => ({response}))
    .catch((error) => error);
};
