const birthdate = document.querySelector("#date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#checkbtn");



checkButton.addEventListener('click',function getValues(){
    console.log(birthdate.value,luckyNumber.value)
})