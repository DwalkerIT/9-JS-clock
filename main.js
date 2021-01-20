// let currentDate = new Date();
// console.log(currentDate.getHours());
// console.dir(currentDate);
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());

// let hours = currentDate.getHours();
// let minutes = currentDate.getMinutes();
// let seconds = currentDate.getSeconds();

// let time = `<div>${hours} : ${minutes} : ${seconds}</div>`;

// document.querySelector("#hours").innerHTML = currentDate.getHours();
// document.querySelector("#minutes").innerHTML = currentDate.getMinutes();
// document.querySelector("#seconds").innerHTML = currentDate.getSeconds();
// document.querySelector("#time").innerHTML = time;
setInterval(function () {
  let currentDate = new Date();

  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let time = `<div>${hours} : ${minutes} : ${seconds}</div>`;
  return (document.querySelector("#time").innerHTML = time);
}, 1000);
// setInterval(function () {
//   alert("Hello");
// }, 3000);
