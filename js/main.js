"use strict";

//Nivell 1 - Exercici 1

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


