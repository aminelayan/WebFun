var high1_val=27;
var high3_val=26;
var high2_val=21;
var high_val=24;

var low1_val=19;
var low2_val=16;
var low3_val=21;
var low_val=18;

document.getElementById("high1").innerText=((high1_val)+'°C')
document.getElementById("high2").innerText=((high2_val)+'°C')
document.getElementById("high3").innerText=((high3_val)+'°C')
document.getElementById("high").innerText=((high_val)+'°C')
document.getElementById("low1").innerText=((low1_val)+'°C')
document.getElementById("low").innerText=((low_val)+'°C')
document.getElementById("low2").innerText=((low2_val)+'°C')
document.getElementById("low3").innerText=((low3_val)+'°C')

function c2f(x){
    return Math.round(x * (9/5) + 32);
}

function alerting(){
    alert("loading weather report")
}

function remove(){
    var box=document.querySelector("footer");
    box.remove();
}
    

function showData(){
    var e = document.getElementById("temp");
    var text = e.options[e.selectedIndex].text;

    if(text =="°F"){
        console.log("F");
        document.getElementById("high1").innerText=(c2f(high1_val)+'°F')
        document.getElementById("high2").innerText=(c2f(high2_val)+'°F')
        document.getElementById("high3").innerText=(c2f(high3_val)+'°F')
        document.getElementById("high").innerText=(c2f(high_val)+'°F')
        document.getElementById("low1").innerText=(c2f(low1_val)+'°F')
        document.getElementById("low").innerText=(c2f(low_val)+'°F')
        document.getElementById("low2").innerText=(c2f(low2_val)+'°F')
        document.getElementById("low3").innerText=(c2f(low3_val)+'°F')

    }
    else {
        console.log("C");
        document.getElementById("high1").innerText=((high1_val)+'°C')
        document.getElementById("high2").innerText=((high2_val)+'°C')
        document.getElementById("high3").innerText=((high3_val)+'°C')
        document.getElementById("high").innerText=((high_val)+'°C')
        document.getElementById("low1").innerText=((low1_val)+'°C')
        document.getElementById("low").innerText=((low_val)+'°C')
        document.getElementById("low2").innerText=((low2_val)+'°C')
        document.getElementById("low3").innerText=((low3_val)+'°C')
    }
}

