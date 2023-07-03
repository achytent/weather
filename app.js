// https://api.weatherapi.com/v1/current.json?key=0ca9e289e2124886baa83054233006&q=london

const cityForm = document.querySelector('form');
const locationCity = document.querySelector('.location-city');
const weatherIcon = document.querySelector('img');
const temperature = document.querySelector('.temperature');
const degrees = document.querySelector('.degrees');
const measureUnit = document.querySelector('span');

let data;

cityForm.addEventListener('submit', async event => {
    event.preventDefault();
    const city = event.target['city'].value;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0ca9e289e2124886baa83054233006&q=${city}`, { mode: 'cors'});
    data = await response.json();
    updatePage(data);
})

temperature.addEventListener('click', () => {
    if(measureUnit.textContent === "C"){
        measureUnit.textContent = "F";
        degrees.textContent = data.current.temp_f;
    } else {
        measureUnit.textContent = "C";
        degrees.textContent = data.current.temp_c;
    }
})

function updatePage(data){
    locationCity.textContent = data.location.name;
    weatherIcon.src = data.current.condition.icon;
    degrees.textContent = data.current.temp_c;
    measureUnit.textContent = "C";
}

