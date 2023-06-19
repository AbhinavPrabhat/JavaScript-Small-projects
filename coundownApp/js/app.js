const endDate = "2 July 2023 12:00 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
  const end = new Date(endDate) 
  const now = new Date()// gives current time and date
  const timeDiff = Math.abs(end - now) / 1000; // Get time difference in seconds
if(timeDiff<0){
  return;
}
  inputs[0].value = Math.floor(timeDiff / (3600 * 24));
  inputs[1].value = Math.floor((timeDiff % (3600 * 24)) / 3600);
  inputs[2].value = Math.floor((timeDiff % 3600) / 60);
  inputs[3].value = Math.floor(timeDiff % 60);
  
}

clock();

/**
 * 1 day -- 24 hrs
 * 1hr -- 60 mins
 * 60 mins -- 3600 sec
 */

setInterval(
  ()=>{
    clock()
  },
  1000
)