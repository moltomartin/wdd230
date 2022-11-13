const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const prophets = jsonObject['prophets'];
    const cards = document.querySelector('.cards');

    prophets.forEach(prophet =>{
            
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let  birthdate = document.createElement('p');
            let  birthplace = document.createElement('p');
            let portrait = document.createElement('img');

            h2.textContent = `${prophet.name} ${prophet.lastname}`;
            birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
            birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
          
            portrait.setAttribute('src', `${prophet.imageurl}`);
            portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
            portrait.setAttribute('loading', 'lazy');
          
            card.appendChild(h2);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(portrait);
          
            document.querySelector('div.cards').appendChild(card);
          
    });
  });

 