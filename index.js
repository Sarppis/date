let weekday = new Array(7);

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function countDays() {
  let days = [];
  let startDate = new Date(document.getElementById('startDate').value);
  //let myDate = document.getElementById('myDate').value;
  let endDate = new Date(document.getElementById('myDate').value);

  while (startDate <= endDate) {
    startDate.setDate(startDate.getDate() + 1);
    days.push(startDate);
  }
console.log(days.length);
document.getElementById('demo2').innerHTML = 'There is ' + days.length + ' days left.';
}

function workDays() {
let days = [];
let startDate = new Date(document.getElementById('startDate').value);
//let myDate = document.getElementById('myDate').value;
let endDate = new Date(document.getElementById('myDate').value);

while (startDate <= endDate) {
  let weekDayName = weekday[startDate.getDay()];
  startDate.setDate(startDate.getDate() + 1);
  if (weekDayName != 'Sunday' && weekDayName!= 'Saturday') {
  days.push(weekDayName);
  console.log(days);
  }
}

console.log(days.length);
document.getElementById("demo3").innerHTML = days.length + " working days";
}


let countDownDate = new Date("Oct 20, 2019 23:59:59").getTime();

let x = setInterval(function() {
let now = new Date().getTime();
let distance = countDownDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  }, 1000);







//var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//var dateTime = date+' '+time;
