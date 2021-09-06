// document.getElementById("loginForm").addEventListener("submit",(event)=>{
//     event.preventDefault()
// })



// function register() {
//     var model = {}

//     model.stdName = document.getElementById('stdName').value
//     model.fthrName = document.getElementById('fthrName').value
//     model.inst = document.getElementById('inst').value
//     model.email = document.getElementById('email').value
//     model.password = document.getElementById('password').value

//     console.log(model)
//     firebase.database().ref('/').child('studentData').push(model)
// }


function signup() {
    var model = {}

    model.stdName = document.getElementById('stdName').value
    model.fthrName = document.getElementById('fthrName').value
    model.inst = document.getElementById('inst').value
    model.email = document.getElementById('email').value
    model.password = document.getElementById('password').value
    // firebase.database().ref('/').child('studentData').push(model)

    console.log(model)

    firebase.auth().createUserWithEmailAndPassword(model.email, model.password)
        .then(function (success) {
            console.log(success)
        }).catch(function (error) {
            console.log(error)
        })

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("../index.html")
    }
})
}



function login(){
    var model = {}
    model.email = document.getElementById('email').value
    model.password = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(model.email,model.password)
    .then(function(success){
        console.log(success)
    })
    .catch(function(err){
        console.log(err.message)
    })

    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            location.replace("./main page/mainpage.html")
        }
    })
}



// function saveData(){
//     var name = document.getElementById('name');
//     var roll = document.getElementById("roll");
//     var student = {
//         name : name.value,
//         roll : roll.value,
//     }
//     firebase.database().ref('/').child("sahil").push(student)
// }