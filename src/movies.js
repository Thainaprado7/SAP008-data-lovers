import data from "./data/ghibli/ghibli.js"

function PrintandoCard(film) {
    return `
        <article>
            <p>Title: ${film.title}</p>
            <img id= "imagem1" src="${film.poster}"/></p>
            <p>Director: ${film.director}</p>
            <p>Release date: ${film.release_date}</p>
        </article>
        `;
}

function montaCard(lista) {
    let directorFilter = document.getElementById("filterDirector").value;

    if (directorFilter){
        console.log(`O valor do direto é ${directorFilter}`);
        lista =  lista.filter((obj) => obj.director == directorFilter);
    }

    return lista
        .map((film) => {
            return PrintandoCard(film);
        })
        .join("");
}

printaCards.innerHTML = montaCard(data.films);

// aqui termina a função de printar cards //

// aqui começa a função de filtros //

printaFiltroDirector(data.films);

function printaFiltroDirector(filmsList){
    let filterDirector = document.getElementById("filterDirector");
    let directorList = filmsList.map((film) => film.director);
    printaSelect(new Set(directorList), filterDirector);

}

function printaSelect(objList, campoDoFiltro){
    console.log(campoDoFiltro)
    objList.forEach((obj)=> {
        var option = document.createElement("option");
        option.text = obj;
        option.value = obj;    
        campoDoFiltro.appendChild(option);
    })
}

const classe_filtros = document.querySelectorAll(".conteudo-principal-filtros");

classe_filtros.forEach((item) => {
    item.addEventListener("change", (e) => {
        printaCards.innerHTML = "";
        console.log("Limpando a listagem, antes de passar o filtro !")
        printaCards.innerHTML = montaCard(data.films);
    });
})

