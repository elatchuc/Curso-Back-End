function tirar(elementos){
    const primeiroElemento= elementos.shift()
    const ultimoElemento= elementos.pop()

    return [primeiroElemento, ultimoElemento]
}
    console.log(tirar([1,2,3,4,5]))