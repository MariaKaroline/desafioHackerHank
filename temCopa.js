function solucao(ano) {
    if(ano % 4 ==0){
        console.log('JOGOS')
    }else if(ano % 2 == 0 && !ano % 4 ==0 ){
        console.log('COPA')
    }else{
        console.log('MEH')
  }
}
