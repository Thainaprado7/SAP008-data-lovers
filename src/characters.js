import data from "./data/ghibli/ghibli.js"
import { orderC, getCharListFromMovie } from "./data.js";

function PrintandoCard(people) {
    return `
        <article>
            <p> ${people.name}</p>
            <img id= "imagem2" src = "${people.img}"/>
            <p> Age: ${people.age}</p>
            <p> Gender: ${people.gender}</p>
            <p> Specie: ${people.specie}</p>
        </article>
        `;
}

function montaCard(lista) {
    let searchCharacters = document.getElementById("searchCharacters").value;
    let ageFilter = document.getElementById("filterAge").value;  
    let genderFilter = document.getElementById("filterGender").value;
    let speciesFilter = document.getElementById("filterSpecies").value;

    if (searchCharacters){
        lista = lista.filter((obj) => obj.name.toLowerCase().includes(searchCharacters.toLowerCase()))
    }

    if (ageFilter){
        lista = lista.filter((obj) => obj.age == ageFilter);
    }

    if (genderFilter){
        lista =  lista.filter((obj) => obj.gender == genderFilter);
    }

    if (speciesFilter){
        lista =  lista.filter((obj) => obj.specie == speciesFilter);
    }


    return lista
        .map((film) => {
            return PrintandoCard(film);
        })
        .join("");
}


printaCards.innerHTML = montaCard(getCharListFromMovie(data.films));

// aqui começa a função search - pesquisar por busca //

let searchCharacters = document.getElementById("searchCharacters")
searchCharacters.addEventListener('keyup', (e) => {
    e.preventDefault();
    printaCards.innerHTML = montaCard(getCharListFromMovie(data.films));
})
// aqui acaba a função search - pesquisar por busca //

// aqui começa a função de filtrar por idade//

printaFiltroAge(getCharListFromMovie(data.films));

function printaFiltroAge (filmsList) {
    let filterAge = document.getElementById ("filterAge");
    let ageList = filmsList.map((film) => {
                                            if(film.age)
                                                return film.age 
                                }).sort();
    printaSelect(new Set(ageList), filterAge);
}

//aqui acaba a função de filtrar por idade // 
// aqui começa a função de filtrar genero //

printaFiltroGender(getCharListFromMovie(data.films));

function printaFiltroGender(filmsList){
    let filterGender = document.getElementById("filterGender");
    let genderList = filmsList.map((film) => film.gender);
    printaSelect(new Set(genderList), filterGender);
    
}

// aqui acaba a função de filtrar por genero // 
// aqui começa a função de filtrar por especie //

printaFiltroSpecie(getCharListFromMovie(data.films));

function printaFiltroSpecie(filmsList){
    let filterSpecie = document.getElementById("filterSpecies");
    let specieList = filmsList.map((film) => film.specie);
    printaSelect(new Set(specieList), filterSpecie);
    
}

// aqui acaba a função de filtrar por especie //

// aqui começa a função de limpar os filtros // 

let buttonClean = document.getElementById("buttonClean")

buttonClean.addEventListener('click', function refresh(){
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
        printaCards.innerHTML = montaCard(getCharListFromMovie(data.films));
    });
})
