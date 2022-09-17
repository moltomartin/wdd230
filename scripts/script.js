const date1 = document.querySelector("#currentdate");
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date1.innerHTML = `Last Update: <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}



let year = document.querySelector("#year");
year.innerHTML = '&copy 2022 | Martin Moltó | Mendoza - Argentina';