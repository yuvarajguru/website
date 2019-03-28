window.addEventListener('load', ()=> {
let long;
let lat;
let temperatureDescrpiton = document.querySelector(".temperature-descrpiton");
let temperatureDegree = document.querySelector(".temperature-degree");
let loactionTimezone = document.querySelector(".location-timezone");

if(navigator.geolocation){

 navigator.geolocation.getCurrentPosition(pos => {
     long = pos.coords.longitude;
     lat = pos.coords.latitude;
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/6a910f6a489ab20a7e6fa6e3218700f4/${lat},${long}`;

  fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data);
     const {temperature,summary,icon} = data.currently;
     
        temperatureDegree.textContent = temperature;
        temperatureDescrpiton.textContent = summary;
        loactionTimezone.textContent = data.timezone;

        seticon(icon, document.querySelector(icon));
    });
    });
}else{
    h1.textContext="hello!";
}

function seticon(icon, iconID){
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();  
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]); 
}

});