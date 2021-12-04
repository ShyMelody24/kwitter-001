
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAwGd3jqk_9-eJKh4DaoVsq1f1fk4ix9ZQ",
      authDomain: "kwitter-92c16.firebaseapp.com",
      databaseURL: "https://kwitter-92c16-default-rtdb.firebaseio.com",
      projectId: "kwitter-92c16",
      storageBucket: "kwitter-92c16.appspot.com",
      messagingSenderId: "648232306226",
      appId: "1:648232306226:web:cb740b59632583cbde9e2b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    function addRoom()
    {
     room_name = document.getElementById("room_name").nodeValue;
     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     });
     localStorage.setItem("room_name" , room_name);
     
     window.location = "kwitter_page.html";
    }
    
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      console.log("Room Name - " + Room_names);
      row = "<div class ='room_name'="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room)name", name);
      window.location = "kwitter_page.html";
}
