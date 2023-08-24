const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge()
{
const birthdayValue = birthday.value;
if (birthdayValue ==="")
{
    alert("Please enter your Birthdate");
}
else
{
    const age=getAge(birthdayValue);
    result.innerText=`Your age is ${age} ${age < 1 ? "year" : "years"} old`;
}
}
function getAge(birthdayValue){
const currentDate= new Date();
const birthdate = new Date(birthdayValue)
let age=currentDate.getFullYear()-birthdate.getFullYear();
let month=currentDate.getMonth()-birthdate.getMonth();
if(month < 0 || (month===0 && currentDate.getDate() < birthdate.getDate()))
{
    age--;
}
return age;
}
btn.addEventListener("click", calculateAge)