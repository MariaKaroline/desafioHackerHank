function solucao(largura, altura) {
    //Imprima na tela RETRATO caso a altura seja maior que a largura
  
    if(altura>largura){
          console.log("RETRATO")
    }else if (largura>altura){
        //Imprima na tela PAISAGEM caso a largura seja maior que a altura
          console.log('PAISAGEM')  
    }else{
       //Imprima na tela QUADRADA caso a largura e altura sejam iguais
     
          console.log('QUADRADA')
    }
  
}