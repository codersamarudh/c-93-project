
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyATSlHc2txseGjCgQd-_wJifwlLQbuXOnM",
      authDomain: "letschat-web-app---1-9dc57.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-9dc57-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-9dc57",
      storageBucket: "letschat-web-app---1-9dc57.appspot.com",
      messagingSenderId: "1054957577334",
      appId: "1:1054957577334:web:53dfb052a28994fcdd2b57"
    };
    
    // Initialize Firebase
   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
