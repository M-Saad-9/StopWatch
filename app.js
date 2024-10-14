let getHour = document.getElementById("hour")
let getMin = document.getElementById("min")
let getSec = document.getElementById("sec");

let start = document.getElementById("start")
let stops = document.getElementById("stop")
let reset = document.getElementById("reset")


let hours = 0;
let minutes = 0;
let second = 0;
let timer = false ;


start.addEventListener("click", (e) => {
    timer = true
    updateTime();
});

stops.addEventListener("click", (e) => {
    timer = false
    updateTime();
});

reset.addEventListener("click", (e) => {
  location.reload();
})

function updateTime() {
   
    if (timer == true) {
        second = second + 1
     if (second == 60) {
        minutes = minutes + 1
        second = 0;
     }
     if (minutes == 60) {
        hours = hours+1
        minutes = 0;
     }

     let sec = second;
     let min = minutes;
     let hr = hours;

    if (second < 10) {
        sec = `0${second}`
    } 
    if (minutes < 10) {
        min = `0${minutes}`
    }
    if (hours < 10) {
        hr = `0${hours}`
    }
      
     setTimeout(updateTime, 1000); 
     getSec.innerHTML = sec
     getMin.innerHTML = min
     getHour.innerHTML = hr
    }
    
    
}