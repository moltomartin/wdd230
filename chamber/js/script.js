function toggleMenu () {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hambutton").classList.toggle("open");
}

const x = document.getElementById("hambutton")
x.onclick = toggleMenu;