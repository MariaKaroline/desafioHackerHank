function solucao(obj) {
    if(obj.temIngresso == true && (obj.estaComPais == true 
        || obj.idade >= obj. censura)){
       if (obj.temCarteirinha){
           console.log('MEIA');
         }else{
            console.log('INTEIRA');
        }
    }else{
        console.log('ACESSO NEGADO');
    }
}   