setInterval(() => {
    d =new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    hrotation=30*h+m/2;
    mrotation=6*m;
    srotation=6*s;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
    time.innerHTML=`${formatTwoDigits(d.getHours())} : ${formatTwoDigits(d.getMinutes())} : ${formatTwoDigits(d.getSeconds())}`;
    
date.innerHTML=currentDate;
month.innerHTML=months[currentMonth];
year.innerHTML=currentYear;

for(let i=0;i<7;i++){
    if(i==currentDay){
        day.innerHTML=days[i];
    }
}
}, 1000);


function formatTwoDigits(number) {
    return number.toString().padStart(2, '0');
}

let date=document.getElementById('date');
let day=document.getElementById('day');
let month=document.getElementById('month');
let year=document.getElementById('year');
let time=document.getElementById('time');

let d = new Date();
let currentDay=d.getDay();
let currentDate=d.getDate();
let currentMonth=d.getMonth();
let currentYear=d.getFullYear();
let currentTime=d.getTime();

let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months=['January','February','March','April','May','June','July','August','September','October','November','December'];4
time.style.marginTop="50px";