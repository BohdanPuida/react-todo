import firebase from 'firebase';
try {
  var config = {
      apiKey: "AIzaSyCWtXCh2TZp9n3PNne1MJgtocDCLc6hKbk",
      authDomain: "todoapp-86c90.firebaseapp.com",
      databaseURL: "https://todoapp-86c90.firebaseio.com",
      projectId: "todoapp-86c90",
      storageBucket: "todoapp-86c90.appspot.com",
      messagingSenderId: "1085508458475"
    };
    firebase.initializeApp(config);
} catch(e) {

}
 export var firebaseRef = firebase.database().ref();
 export default firebase;
