const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

const heroSection = document.querySelector(".section-hero")
const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];
  !entry.isIntersecting ? document.body.classList.add("sticky") : document.body.classList.remove("sticky")
},
  { root: null, threshold: 0 });
observer.observe(heroSection)

/*..................timer section....................................*/
var months = ["Jan", "Fab", "March", "Apr", "May", "June","July","August","September","October","November","Dec"]
var weekdays = ["Sunday ", "Monday ", "Tuesday ", "Wednesday ", "Thursday", "Friday ", "Saturday "];

function LoadTime() {
  var now = new Date();
  document.getElementById("time").innerHTML = now.toLocaleTimeString();
}
function LoadDate() {
  var now = new Date();
  document.getElementById("date").innerHTML = `
            ${weekdays[now.getDay()]}${now.getDate()},${months[now.getMonth()]}-${now.getFullYear()}
            `;
}
function LoadSalute() {
  var now = new Date();
  var hrs = now.getHours();
  if (hrs > 00 && hrs <= 12) {
    document.getElementById("salute").innerHTML = "Good Morning..";
    document.getElementById("icon").className = "bi bi-sunrise-fill";
  }
  else if (hrs > 12 && hrs <= 17) {
    document.getElementById("salute").innerHTML = "Good Afternoon..";
    document.getElementById("icon").className = "bi bi-sun-fill";
  }
  else if (hrs > 17 && hrs <= 20) {
    document.getElementById("salute").innerHTML = "Good Evening..";
    document.getElementById("icon").className = "bi bi-sunset-fill";
  }
  else if (hrs > 21 && hrs <= 23) {
    document.getElementById("salute").innerHTML = "Good Night..";
    document.getElementById("icon").className = "bi bi-moon-stars-fill";
  }

}


function bodyload() {
  setInterval(LoadTime, 1000);
  LoadDate();
  LoadSalute();
}
/*................................................................................................................ */

/*...............................back to top scroll................................ */
function btnClick(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}
/*..................................................................................... */

var typed=new Typed(".typed",{
  strings:["Designer","Developer"],
  typeSpeed:100,
  backSpeed:50,
  loop:true
})