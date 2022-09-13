function alerting(contactus){
alert("Contact us at 555-5555")
}
function addtocart(){
    var buy=document.getElementById("buy");
    console.log(buy)
    var items=parseInt(buy.innerText);
    console.log(items)
    items++;
    console.log(items)
    buy.innerText=items
}
function sortby(){
    var sort=document.getElementById("sortby")
    console.log(sort);
    console.log(sort.innerText)
    var sortby=document.getElementById("best")
    sortby.innerText=sort.innerText
}
