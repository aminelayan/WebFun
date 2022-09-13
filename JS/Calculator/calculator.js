var num =0;
var temp=0;
var sum=0
var op='amin';
function setOP(operation){
    
    if(op==='amin'){
    temp=num
    console.log(temp)
    num=0
    }
    op=operation;
}
function press(x){
    num=num*10+x;
    document.getElementById("display").innerText=num;
    console.log(num)
}

function calculate(){
    if (op==='amin'){
        skip()
    }
    console.log("num="+num )
    console.log("temp"+temp)
    switch(op){
        case '*': sum=num*temp; break;
        case '-': sum=num-temp; break;
        case '+': sum=num+temp; break;
        case '/': sum=num/temp; break;
    }
    document.getElementById("display").innerText=sum;
    console.log("sum"+sum)
    console.log("num="+num )
}
function clr(){
num =0;
temp=0;
sum=0;
op='amin';
document.getElementById("display").innerText=num;
}
