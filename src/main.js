import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const body = document.getElementById("body");
const menu = document.getElementById("menu");

function clickMenu(){
    if(paginas.style.display == 'block'){
       paginas.style.display = 'none'
    } else {
       paginas.style.display = 'block'
    }
  }
  
  function responsivo() {
    if(window.innerWidth >= 768) {
      paginas.style.display = 'block'
    } else {
      paginas.style.display = 'none'
    }
  }
  
  body.addEventListener("onrisize");
  menu.addEventListener("clickMenu")
