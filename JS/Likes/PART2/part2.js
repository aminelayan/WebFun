var count1=9;
var count2=12;
var count3=9;


function add(id ,caseID) {
    switch(caseID){
        case 1:
            count=++count1;
            break;
        case 2:
            count=++count2;
            break;
        case 3:
            count=++count3;
            break;
    }
    var countElement= document.querySelector(id);
    countElement.innerText=count+ " Like(s)";
    console.log(count);
}
