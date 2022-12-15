
const requestURL = "fruit.json";

const selectElems = document.querySelectorAll("select");

let fruits = "";

getFruit();


async function getFruit() {
 
  const response = await fetch(requestURL);

  
  fruits = await response.json();


  fruits.forEach(addFruitOption);
}

/**

 * @param fruit - The fruit object that is being passed in.
 */
function addFruitOption(fruit) {
  for (i = 0; i < selectElems.length; i++) {
    let fruitOption = document.createElement("option");

    fruitOption.value = `${fruit.name}`;
    fruitOption.textContent = `${fruit.name}`;
    fruitOption.accessKey = `${fruit.name}`;

    selectElems[i].appendChild(fruitOption);
  }
}


const subBtn = document.querySelector("#submit");

subBtn.onclick = submitForm;

function submitForm() {

  
  const drinkForm = document.querySelector("#drink-form");

  if (drinkForm.checkValidity()) {


    const responseSection = document.querySelector("#response");

    
    let specialtyDrinkCount = Number(window.localStorage.getItem("specialtyDrinkCount"));
    specialtyDrinkCount += 1;

    
    responseSection.className = "hidden";
    responseSection.innerHTML = `<h3>Specialty Drink #${specialtyDrinkCount}</h3>`;

    
    const name = document.createElement("p");
    name.textContent = `Name: ${document.querySelector("#fname").value} ${document.querySelector("#lname").value}`;
    responseSection.appendChild(name);

    const email = document.createElement("p");
    email.textContent = `Email: ${document.querySelector("#email").value}`;
    responseSection.appendChild(email);

    
    const phone = document.createElement("p");
    let phoneNumber = document.querySelector("#tel").value
    phone.textContent = `Phone: ${formatPhoneNumber(phoneNumber)}`;
    responseSection.appendChild(phone);

    
    const selectedFruits = document.createElement("ul");
    selectedFruits.innerHTML = `<p>Selected fruits</p>`;


    const selectedFruit1 = document.createElement("li");
    const fruit1 = document.querySelector("#fruit1");
    selectedFruit1.textContent = fruit1.value;
    selectedFruits.appendChild(selectedFruit1);

   
    const selectedFruit2 = document.createElement("li");
    const fruit2 = document.querySelector("#fruit2");
    if (fruit2.value !== "") {
      selectedFruit2.textContent = fruit2.value;
      selectedFruits.appendChild(selectedFruit2);
    }

   
    const selectedFruit3 = document.createElement("li");
    const fruit3 = document.querySelector("#fruit3");
    if (fruit3.value !== "") {
      selectedFruit3.textContent = fruit3.value;
      selectedFruits.appendChild(selectedFruit3);
    }

    
    responseSection.appendChild(selectedFruits);

   
    const specialInstructionsHeader = document.createElement("p");
    const specialInstructions = document.createElement("p");
    specialInstructionsHeader.textContent = `Instructions:`;
    specialInstructions.textContent = `${document.querySelector("#special-instructions").value}`;
    responseSection.appendChild(specialInstructionsHeader);
    responseSection.appendChild(specialInstructions);

    
    const da = new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"});
    const orderDate = document.createElement("p");
    orderDate.textContent = `Order Date: ${da}`;
    responseSection.appendChild(orderDate);



    const nutritionFacts = document.createElement("ul");
    nutritionFacts.innerHTML = `<p>Nutrition Facts</p>`;

    const carbsEl = document.createElement("li");
    const proteinEl = document.createElement("li");
    const fatEl = document.createElement("li");
    const sugarEl = document.createElement("li");
    const caloriesEl = document.createElement("li");

   
    let carbs = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;

    
    for (i = 0; i < fruits.length; i++) {
      
      if (fruit1.value == fruits[i].name) {
        carbs += fruits[i].nutritions.carbohydrates;
        protein += fruits[i].nutritions.protein;
        fat += fruits[i].nutritions.fat;
        sugar += fruits[i].nutritions.sugar;
        calories += fruits[i].nutritions.calories;
      }

      
      if (fruit2.value == fruits[i].name) {
        carbs += fruits[i].nutritions.carbohydrates;
        protein += fruits[i].nutritions.protein;
        fat += fruits[i].nutritions.fat;
        sugar += fruits[i].nutritions.sugar;
        calories += fruits[i].nutritions.calories;
      }

     
      if (fruit3.value == fruits[i].name) {
        carbs += fruits[i].nutritions.carbohydrates;
        protein += fruits[i].nutritions.protein;
        fat += fruits[i].nutritions.fat;
        sugar += fruits[i].nutritions.sugar;
        calories += fruits[i].nutritions.calories;
      }
    }



    carbsEl.textContent = `Carbohydrates: ${Math.round(carbs * 10) / 10}`;
    proteinEl.textContent = `Protein: ${Math.round(protein * 10) / 10}`;
    fatEl.textContent = `Fat: ${Math.round(fat * 10) / 10}`;
    sugarEl.textContent = `Sugar: ${Math.round(sugar * 10) / 10}`;
    caloriesEl.textContent = `Calories: ${Math.round(calories * 10) / 10}`;

   
    nutritionFacts.appendChild(carbsEl);
    nutritionFacts.appendChild(proteinEl);
    nutritionFacts.appendChild(fatEl);
    nutritionFacts.appendChild(sugarEl);
    nutritionFacts.appendChild(caloriesEl);

    
    responseSection.appendChild(nutritionFacts);

    
    document.querySelector("#special-instructions").value = "";

    
    responseSection.className = "visible";

  
    document.querySelector("#submit").value = "Sumbit Another Drink";

    responseSection.scrollIntoView();

    
    localStorage.setItem("specialtyDrinkCount", specialtyDrinkCount);
  }
}

/**
   * It takes a string of numbers and returns a formatted phone number.
   * @param phoneNumberString - The phone number string to be formatted.
   * @returns the phone number in the format (xxx) xxx-xxxx.
   */
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}
