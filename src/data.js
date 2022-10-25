export function order(data, value){
    if (value == "A-Z"){
        return data.sort((a, b) => a.title > b.title ? 1 : -1)
    }else {
        return data.sort((a, b) => a.title < b.title ? 1: -1)
    }
    
}

export function orderC(data, value){
    if (value == "A-Z"){
        return data.sort((a, b) => a.people > b.people ? 1 : -1)
    }else {
        return data.sort((a, b) => a.people < b.people ? 1 : -1)
    }
}

export function getCharListFromMovie(list) {
    return list.reduce((novaLista, valor_atual, contador) => {
        // console.log(`${JSON.stringify(novaLista)} - array !`);
        //console.log(`${JSON.stringify(valor_atual.people)} - valor atual!`);
        //console.log(`${JSON.stringify(contador)} - contador!`);
        return novaLista.concat(valor_atual.people);
    }, []);
}