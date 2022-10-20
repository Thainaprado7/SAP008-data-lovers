import data from "./data/ghibli/ghibli.js"
import { order } from "./data.js";
import { printaCards, montaCard  } from "./main";


printaCards.innerHTML = montaCard(data.films);
 
// aqui termina a função de printar cards //
// aqui começa a função search - pesquisar por busca //

let searchMovies = document.getElementById("searchMovie")
searchMovies.addEventListener('keyup', (e) => {
    e.preventDefault();
    printaCards.innerHTML = montaCard(data.films);
})



// aqui começa a função de filtrar por busca // 
// aqui começa a função de filtrar por ordem alfabética  A-Z//

let ordemAlfabetica = document.getElementById("filterSortOf")
function resultado(){
    return montaCard(order(data.films, ordemAlfabetica.value))
}

// aqui acaba a função de filtrar por ondem alfabética a-z
// aqui começa a função de filtrar por ordem alfabética  z-a//
let ordemAlfabeticaZa = document.getElementById("filterSortOf")
function resultado1(){
    return montaCard(order(data.films, ordemAlfabeticaZa.value))
}


ordemAlfabetica.addEventListener("change", resultado);
ordemAlfabeticaZa.addEventListener("change", resultado1);


// aqui acaba a função de filtrar por ordem alfabética z-a//
// aqui começa a função de filtrar por ano//

printaFiltroRelease(data.films);

function printaFiltroRelease (filmsList) {
    let filterYear = document.getElementById ("filterYear");
    let releaseList = filmsList.map((film) => film.release_date);
    printaSelect(new Set(releaseList), filterYear);
}

//aqui acaba a função de filtrar por ano // 
// aqui começa a função de filtrar diretor //

printaFiltroDirector(data.films);

function printaFiltroDirector(filmsList){
    let filterDirector = document.getElementById("filterDirector");
    let directorList = filmsList.map((film) => film.director);
    printaSelect(new Set(directorList), filterDirector);
    
}

// aqui acaba a função de filtrar por diretor // 
// aqui começa a função de limpar os filtros // 

let cleanButton = document.getElementById("buttonClean")

cleanButton.addEventListener('click', function refresh(){
    window.location.reload();})
    
// aqui acaba a função de limpar os filtros //
// função generalista que será chamada nos filtros // 

function printaSelect(objList, campoDoFiltro){
    objList.forEach((obj)=> {
        let option = document.createElement("option");
        option.text = obj;
        option.value = obj;    
        campoDoFiltro.appendChild(option);
    })
}

let classe_filtros = document.querySelectorAll(".conteudo-principal-filtros");

classe_filtros.forEach((item) => {
    item.addEventListener("change", (e) => {
        printaCards.innerHTML = "";
        printaCards.innerHTML = montaCard(data.films);
    });
})

// aqui acaba o filtro director


