import axios from 'axios';
import base64 from'base-64';
import qs from 'query-string';

const ENCODED_CREDENTIALS = base64.encode(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`);
const TOKEN_PROVIDER_API = 'https://accounts.spotify.com/api/token';

export const getAccessToken = () => {
  return axios({
    method: 'post',
    url: TOKEN_PROVIDER_API,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' , 'Authorization' : 'Basic ' + ENCODED_CREDENTIALS},
    data : qs.stringify({
        grant_type : 'client_credentials'
    })
  })
    .then(response => ({ response: response.data }))
    .catch(error => ({ error }));
};