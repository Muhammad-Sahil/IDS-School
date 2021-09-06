// firebase.auth().onAuthStateChanged((user)=>{
// if(!user){
//     location.replace("./pages/login.html")
// }
// })






var a = document.getElementById("full")
   
     firebase.database().ref('Text Advertizement').on('child_added',function(data){
                var newElement = document.createElement("H1")
                    var text = data.val().value
                    text = document.createTextNode(text)
                    newElement.appendChild(text)
                    a.appendChild(newElement) 
                    console.log(a)  
            })
        