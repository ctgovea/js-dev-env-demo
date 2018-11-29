import 'whatwg-fetch';        // polyfill to ensure fetch runs in browsers that don't support fetch natively.
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

// Centralized error handling
function onError(error){
  console.log(error);     // eslint-disable-line no-console
}
