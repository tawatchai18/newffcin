import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCsOv-0yQHholukl-II1W5LGPCsm6cf4W4",
    authDomain: "project-ffc-1551689566420.firebaseapp.com",
    databaseURL: "https://project-ffc-1551689566420.firebaseio.com",
    projectId: "project-ffc-1551689566420",
    storageBucket: "project-ffc-1551689566420.appspot.com",
    messagingSenderId: "558806523978"
  };
  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();