
import { Base64 } from 'js-base64';

const API = 'https://ffcmaekawtom.herokuapp.com/v1'
// const API = 'https://ffc-api-test.herokuapp.com/v1'

export function PostData(type, userData, id) {
  return new Promise((resolve, reject) => {
    let url = API + `/org/${id}/authorize`
    fetch(url, {
      method: 'post',
      body: JSON.stringify(userData),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Base64.encode(userData.username + ':' + userData.password),
      })
    }).then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });

  });
}


export function SignupData(type, userData) {
  return new Promise((resolve, reject) => {
    fetch(API + '/org', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
  });
}

export function Data() {
  return new Promise((resolve, reject) => {
    fetch(API + '/org', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });

  });
}

export function CreatData(id) {
  console.log(id, 'createDate')
  return new Promise((resolve, reject) => {
    // fetch( API + `/org/5c875ec69522b200046a40fb/user`, {
    fetch(API + `/org/${id}/user`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer rCHUiQSGQNAz0iCog4WXz',
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

