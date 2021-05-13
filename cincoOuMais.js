function solucao(precos) {
    let total =0   
    if (precos.length<5){
        for(let i= 0; i<precos.length; i++){
            total= precos[i]+total
        }
      console.log(total)

    }else if(precos.length>=5) {
        let menorPreco= precos[0];

        for(let i= 0; i<precos.length; i++)
        if (menorPreco>precos[i]){
            menorPreco= precos[i]
        }else{           
            total= precos[i]+total
                    
        }  
       console.log(total)
    }
}
