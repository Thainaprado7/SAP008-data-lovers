export function PrintandoCard(film) {
    return `
        <article>
            <p> ${film.title}</p>
            <img id= "imagem1" src="${film.poster}"/></p>
            <p>Director: ${film.director}</p>
            <p>Release date: ${film.release_date}</p>
        </article>
        `;
}

export function montaCard(lista) {
    let directorFilter = document.getElementById("filterDirector").value;
    let yearFilter = document.getElementById("filterYear").value;  
    let searchMovies = document.getElementById("searchMovie").value;

    if (directorFilter){
        lista =  lista.filter((obj) => obj.director == directorFilter);
    }

    if (yearFilter){
        lista = lista.filter((obj) => obj.release_date == yearFilter);
    }

    if (searchMovies){
        lista = lista.filter((obj) => obj.title.toLowerCase().includes(searchMovies.toLowerCase()))
    }


    return lista
        .map((film) => {
            return PrintandoCard(film);
        })
        .join("");
}