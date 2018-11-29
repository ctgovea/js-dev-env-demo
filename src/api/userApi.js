import 'whatwg-fetch';        // polyfill to ensure fetch runs in browsers that don't support fetch natively.

export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error);     // eslint-disable-line no-console
}
