const birthdate = document.querySelector("#date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#checkbtn");
const output = document.querySelector("#output-box");

function compareValues(sum,luckyNumber){
    if(sum%Number(luckyNumber) === 0){
        output.innerHTML  ="your birthday is lucky!😁🧨✨";
    }else
    {
        output.innerHTML= "your birthday is NOT lucky, make your own luck!🤨";
    }
}

function calculatesum(Birthdate){
    let sum = 0;
    Birthdate = Birthdate.replaceAll("-","");
    console.log(Birthdate);
    for(let index=0;index<Birthdate.length;index++){
        sum = sum + Number(Birthdate.charAt(index));
        // console.log(Birthdate.charAt(index));
    }
    // for(var i in  [1,6,4])console.log(i)
    //return index and iterates over the object
    // for(var i of [1,6,4])console.log(i)
    //iterate over value and  is dependent on the type of iterable object.
    //loop over any type of data that is iterable.
    return sum;
}
function checknumberIsLucky(){
    
    const Birthdate = birthdate.value;
    const luckynumber = luckyNumber.value;
    const sum = calculatesum(Birthdate);
    if(Birthdate && luckynumber)
    
    compareValues(sum,luckynumber)
    else
    output.innerHTML= "Please Enter both fields!🤨";


   
    // console.log(sum,luckynumber);
}
checkButton.addEventListener('click',checknumberIsLucky );