"use strict";

//Nivell 2 - Exercici 2

const url = "https://icanhazdadjoke.com/"; //Url acudits

const getJoke = async () => { //Funció asíncrona per cridar l'api
  let response = await fetch(url, { 
    headers: {
      'Accept': 'application/json' 
    }
  });
  let data = await response.json(); 
  p.innerText = data.joke; //Mostro a la <p> l'acudit que és troba a un objecte amb la key "joke"
}

let p = document.createElement("p"); //Es crea un element <p>
document.getElementById("joke").appendChild(p); //Introdueixo <p> com a fill de joke

//Quan faig click al botó crido a la funció getJoke
document.getElementById("btn").addEventListener("click", () => { 
  getJoke();
});


//Nivell2 Exercici 3
const weather = "https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019"; //URL API del el-tiempo.net en el municipio de Barcelona

let pWeather = document.createElement("p"); //Creo un element <p>
document.getElementById("weather").appendChild(pWeather); //Introdueixo p com a fill de weather

(async function getWeather() { //Function async 
  let response = await fetch(weather, {
    headers:{
        "Accept": "application/json",
    },
  });

  let data = await response.json();
  pWeather.innerText = `Avui: ${data.stateSky.description}`; //Demano el valor del estat del cel i el poso dins de pWeather
})();
