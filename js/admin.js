document.getElementById("loginForm").addEventListener("submit",(event)=>{
  event.preventDefault()
})

var input = document.getElementById('advtext')
var a = document.getElementById("full")

firebase.database().ref('Text Advertizement').on('child_added', function (data) {
  console.log(data)
  var newElement = document.createElement("H1")
  var text = data.val().value
  text = document.createTextNode(text)
  newElement.appendChild(text)
  a.appendChild(newElement)
})



function foo() {
  var database = firebase.database().ref('Text Advertizement')
  var key = database.push().key
  var todo = {
    value: advtext.value,
    key: key,
  }
  database.child(key).set(todo)
}


function clearData() {
  firebase.database().ref("/Text Advertizement").remove()
}








function login(){
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  firebase.auth().signInWithEmailAndPassword(email,password)  
  .catch((error)=>{
    document.getElementById("error").innerHTML = error.message
  })
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("../pages/adminhome.html")
    }
  })
}

function logout(){
  firebase.auth().signOut()
  location.replace("../pages/adminlogin.html")
}

