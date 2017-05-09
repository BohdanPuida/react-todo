import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCWtXCh2TZp9n3PNne1MJgtocDCLc6hKbk",
    authDomain: "todoapp-86c90.firebaseapp.com",
    databaseURL: "https://todoapp-86c90.firebaseio.com",
    projectId: "todoapp-86c90",
    storageBucket: "todoapp-86c90.appspot.com",
    messagingSenderId: "1085508458475"
  };
  firebase.initializeApp(config);
 var firebaseRef = firebase.database().ref();


  firebaseRef.set({
    appName: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Bogdan',
      age: 18
    }
  }).then(()=>{
    console.log('Set worked!')

  }, (e) => {
    console.log('Set failed!')

  }

)
firebaseRef.child('appName').once('value').then((snapshot)=> {
  console.log('Entire database',snapshot.key, snapshot.val());

}, (e) =>{
  console.log('Unable to fetch value',e)
});
