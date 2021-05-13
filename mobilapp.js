function solucao(tempo, distancia) {
    if(tempo>60){
        if(distancia<=100){
            let preco= distancia*200
            console.log(preco)
        }else{
                let preco= distancia*150
                console.log(preco)
        }
    }else if(tempo>5 && tempo <= 60){
        let preco= (tempo*100)+(distancia*50)
        console.log(preco)
    }else{
        console.log(600)
    }  
}