const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
const currentYear = now.getFullYear();

document.querySelector("currentdate").innerHTML = fullDate;
document.querySelector("#copyrightupdatesmall_year").innerHTML = currentYear;
document.getElementById("copyrightupdatesmall_lastup").innerHTML = document.lastModified;
document.querySelector("#copyrightupdatemedium_year").innerHTML = currentYear;
document.getElementById("copyrightupdatemedium_lastup").innerHTML = document.lastModified;
document.querySelector("#copyrightupdatelarge_year").innerHTML = currentYear;
document.getElementById("copyrightupdatelarge_lastup").innerHTML = document.lastModified;


function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hambutton").classList.toggle("open");
}

const x = document.getElementById("hambutton");

x.onclick = toggleMenu;