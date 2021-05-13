function solucao(letra, palavras) {
    const resultado = []
    
    for (let item of palavras){
        if(item[0] === letra){
            resultado.push(item)
        }
    }
    let palavrasErradas = palavras.length - resultado.length

    console.log(palavrasErradas)
   
}