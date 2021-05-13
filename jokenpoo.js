
function solucao(joao, andre) {
    if((andre == 'PEDRA' && joao == 'TESOURA' )
        ||(andre == 'PAPEL' && joao == 'PEDRA' )
         ||(andre == 'TESOURA' && joao == 'PAPEL' )){
        console.log('ANDRE');
    }else if ((joao == 'PEDRA' && andre == 'TESOURA' )||
        (joao == 'PAPEL' && andre == 'PEDRA' )||
        (joao == 'TESOURA' && andre == 'PAPEL' )){
        console.log('JOAO');

    }else{
        console.log('EMPATOU');
  
    }
}

solucao('TESOURA', "PAPEL")