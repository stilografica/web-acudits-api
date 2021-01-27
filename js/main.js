"use strict";

//Nivell 3 - Exercici 5

const url = ["https://api.chucknorris.io/jokes/random", "https://icanhazdadjoke.com"]; //Array amb les URLs de les APIs

const getJoke = async () => { //Funció asíncrona per cridar l'api
  let index = Math.floor(Math.random()*url.length); //Número aleatori
  let urlActual = url[index]; //Selecciono la url amb aquest index
  let response = await fetch(urlActual, { 
    headers: {
      'Accept': 'application/json' 
    }
  });
  let data = await response.json(); 
  const joke = [data.value, data.joke]; //Array amb les key dels objectes de cada api d'acudits
  p.innerText = joke[index];//Mostro a la <p> l'acudit
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
