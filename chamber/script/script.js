const options = {weekday: "long" , day: "numeric" , month: "long" , year: "numeric"};
document.getElementById("currentDate01").textContent = new Date().toLocaleDateString("en-US" , options);


const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
const currentYear = now.getFullYear();

document.querySelector("#currentDate").innerHTML = fullDate;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')

x.onclick = toggleMenu;