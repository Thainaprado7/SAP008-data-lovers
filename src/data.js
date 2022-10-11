export function order(data, value){
    if (value == "A-Z"){
        return data.sort((a, b) => a.title > b.title ? 1 : -1)
    }else {
        return data.sort((a, b) => a.title < b.title ? 1: -1)
    }
    
}

export function orderC(data, value){
    if (value == "A-Z"){
        return data.sort((a, b) => a.name > b.name ? 1 : -1)
    }else {
        return data.sort((a, b) => a.name < b.name ? 1 : -1)
    }

}