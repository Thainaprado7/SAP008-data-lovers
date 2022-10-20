import data from "./data/ghibli/ghibli.js"
import { orderC } from "./data.js";

// aqui começa a função genérica de printar os cards //
const printCharacters = document.getElementById("printCharacters");
function generateCharactersMovies(movies){
    let layout = "";
    movies.forEach( movie => {
        movie.people.forEach( p => {
            layout += `<div>
            <p> ${p.name}</p>
            <img id= "imagem2" src = "${p.img}"/>
            <p> Age: ${p.age}</p>
            <p> Genre: ${p.genre}</p>
            <p> Specie: ${p.specie}</p>
            </div>`
        })
    });
    printCharacters.innerHTML = layout;
}

generateCharactersMovies(data.films)


function generateCharactersFromMovies(list) {
    return list.reduce((novaLista, valor_atual, contador) => {
        return novaLista.concat(valor_atual.people);
    }, []);
}


// aqui começa  a função do filtro Search // 

let searchCharacters = document.getElementById("searchCharacters")
searchCharacters.addEventListener('keyup', (e) => {
    e.preventDefault();
    printaCards.innerHTML = montaCard(data.films);
})

// aqui acaba  a função do filtro Search // 

// aqui começa a função do filtro Sort Of A-Z // 
// aqui acaba  a função do filtro Sort Of A-Z //


// aqui começa a função do filtro Sort Of Z-A // 
// aqui acaba  a função do filtro Sort Of Z-A // 

// aqui começa a função do filtro Age // 
// aqui acaba  a função do filtro Age //

// aqui começa a função do filtro Genre // 
// aqui acaba  a função do filtro Genre //

// aqui começa a função do filtro Specie // 
// aqui acaba  a função do filtro Specie //

// aqui começa a função do filtro Clean // 

let cleanButton = document.getElementById("buttonClean")

cleanButton.addEventListener('click', function refresh(){
    window.location.reload();})
     
// aqui acaba  a função do filtro Clean //

