
var request = document.querySelector("#requests");
var myName=document.querySelector("#username");
var connection = document.querySelector("#connections");

function edit(){
    myName.innerText = "Atsuka Furururu";
}
function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    request.innerText--;
    connection.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    request.innerText--;
}