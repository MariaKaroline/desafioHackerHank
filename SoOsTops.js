function solucao(produtos) {
    let top= 0;
    let naoTop= 0;
    for(let item of produtos){
        const preco= item.preco
        if(preco>10000){
            top= top+preco;
        }else{
            naoTop= naoTop+preco;
        }
    }
        let totalTop = 0;
        let percentual= (top*100)/(top+naoTop);
    const resposta = {
        totalTop: top,
        percentual: percentual/100
    }
    console.log(resposta)  
}
