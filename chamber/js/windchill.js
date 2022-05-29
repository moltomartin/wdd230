let temperature = document.querySelector(".temperature").textContent;
temperature = parseFloat(temperature);
console.log(temperature);
let windVelocity = document.querySelector(".windVelocity").textContent;
windVelocity = parseFloat(windVelocity);

let windChill = document.querySelector(".windChill");


let result = null;
t = temperature;      
s = windVelocity;   

let f = 35.74 + (0.6215 * t) - (35.75 * (s*0.16)) + (0.4275 * t * (s*0.16))


if (temperature <= 10 && windVelocity > 4.828){
    result = f.toFixed(2);
}else{
    result = NaN; 
}

windChill.textContent = result;