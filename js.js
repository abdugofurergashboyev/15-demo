const modalButtonElement = document.querySelector(".modal-button")
const modalcloseButtonElement = document.querySelector(".modal-close")
modalButtonElement.onclick = function(event){
    document.body.classList.add("modal-body")
}
modalcloseButtonElement.onclick = function(event){
    document.body.classList.remove("modal-body")
}

const ButtonElement = document.querySelector("modal-button")
ButtonElement.addEventListener("click",Event=>{
    console.log(Event);
})
ButtonElement.onclick = event => {
    console.log(event);
}

const ButtonElement2 = document.querySelector("modal-button")
ButtonElement2.onclick = event => {
    console.log(event);
}
var counter = 1
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter> 4){
        counter=1;
    }
},5000);