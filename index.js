const time = document.getElementById("time");
const timeFormat = document.getElementById("timeFormat");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showtime, 1000);
});

const showtime = () =>{
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let secs = date.getSeconds();

  hr = hr<10 ? `0${hr}` : hr;
  min = min<10 ? `0${min}` : min;
  secs = secs< 10 ? `0${secs}` : secs;

 time.innerHTML = `${hr} : ${min} : ${secs}`;

 timeFormat.innerHTML = hr=12 ? "PM" : "AM";
  // console.log("hours " + hr + "mins " + min + "secs " + secs)
}
  