import 'whatwg-fetch';        // polyfill to ensure fetch runs in browsers that don't support fetch natively.
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}

function get(url){
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since reserved word.
function del(url){
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

// Centralized error handling
function onError(error){
  console.log(error);     // eslint-disable-line no-console
}
