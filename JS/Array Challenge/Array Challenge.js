//Always Hungry
function alwaysHungry(arr) {
        var amin=0
        for(var i=0;i<arr.length;i++){
        if(arr[i]=="food"){
        console.log("yummy");
        amin++;
        }
    }
        if(amin===0) console.log("I am Hungry....")
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



//High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0;i<arr.length;i++)
    if (arr[i]>cutoff){
        filteredArr.push(arr[i]);
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//Better than average
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
        var avg=sum/arr.length;
    }
    var count = 0
    for(var j=0;j<arr.length;j++){
        if(arr[j]>avg){
            count++
        }
}
return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//Array Reverse
function reverse(arr) {
    var rev=[]
    for(var i=arr.length-1;i>=0;i--){
        rev.push(arr[i]);
    }
    arr=rev;
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


//Fibonacci Array
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=2;i<n;i++){
        var fib=fibArr[i-2]+fibArr[i-1];
        fibArr.push(fib);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result)