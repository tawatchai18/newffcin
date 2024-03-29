
import { Base64 } from 'js-base64';

const API = 'https://ffcmaekawtom.herokuapp.com/v1'

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
        reject('Username or password is incorrect');
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

//show user หน้า users
export function CreatData(id, token) {
  console.log(token,'ppppl;k');
  return new Promise((resolve, reject) => {
    fetch(API + `/org/${id}/user`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer 0lI41NtRAJTIgjjYHnGZHoyUKH92QAy9AW9z0lBhJJSrBA9QYAw4xT0sC2BxMRhd',
        "Authorization": `Bearer ${token}`,
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

//สมัคร user ใหม่
export function CreatUser(id, token, userData) {
  console.log(id,'opopopop');
  console.log(token, '===12')
  return new Promise((resolve, reject) => {
    fetch(API + `/org/${id}/user`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        // "Authorization": 'Bearer 0lI41NtRAJTIgjjYHnGZHoyUKH92QAy9AW9z0lBhJJSrBA9QYAw4xT0sC2BxMRhd',
      }),
      body: JSON.stringify(userData),
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
