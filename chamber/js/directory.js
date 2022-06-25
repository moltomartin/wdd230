const requestURL = 'data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const companies=jsonObject["directory"];
    companies.forEach(displayDirectory);
  });

  function displayDirectory(companie){

  let card=document.createElement("section");
  let portrait=document.createElement("img");
  let h2=document.createElement("p");
  let p=document.createElement("p");
  let p2=document.createElement("p");
  let p3=document.createElement("p");
  let p4=document.createElement("p");

   h2.textContent=`${companie.Company}`;
   p.textContent=`Address: ${companie.Address}`;
   p2.textContent=`Phone Number: ${companie.Phone}`;
   p3.textContent=`WebSite: ${companie.Website}`;
   p4.textContent=`Membership: ${companie.Membership}`;

   
   portrait.setAttribute('src', companie.imageurl);
   portrait.setAttribute('alt', `Portait of ${companie.name}`);
   portrait.setAttribute('loading','lazy');

   
   card.appendChild(portrait);
   card.appendChild(h2);
   card.appendChild(p);
   card.appendChild(p2);
   card.appendChild(p3);
   card.appendChild(p4);
   
   document.querySelector('div.cards').appendChild(card);
}


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}