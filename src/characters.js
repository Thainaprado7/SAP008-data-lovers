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


    if (searchCharacters){
        lista = lista.filter((obj) => obj.name.toLowerCase().includes(searchCharacters.toLowerCase()))
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
