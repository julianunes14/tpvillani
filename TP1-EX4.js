function crescente() {
    var inputA = document.all['d1'];
    var inputB = document.all['m1'];
    var inputC = document.all['a1'];
    var inputD = document.all['d2'];
    var inputE = document.all['m2'];
    var inputF = document.all['a2'];
    var Resposta = document.all['resposta']

    var dia1 = Number(inputA.value);
    var mes1 = Number(inputB.value);
    var ano1 = Number(inputC.value);
    var dia2 = Number(inputD.value);
    var mes2 = Number(inputE.value);
    var ano2 = Number(inputF.value);    

    if (ano1 > ano2 ) {        
        Resposta.innerHTML = "<br>A pessoa mais velha é a segunda.";
    } 
    else if (ano1 < ano2) {
        Resposta.innerHTML = "<br>A pessoa mais velha é a primeira.";
    }
    else { 
        if (mes1 > mes2) {            
            Resposta.innerHTML = "<br>A pessoa mais velha é a segunda.";
        }
        else if (mes1 < mes2) {
             Resposta.innerHTML = "<br>A pessoa mais velha é a primeira.";
        }
        else { 
            if(dia1 > dia2){
                Resposta.innerHTML = "<br>A pessoa mais velha é a segunda.";
            }
            else if(dia1 < dia2){
                Resposta.innerHTML = "<br>A pessoa mais velha é a primeira.";   
            }
            else {
                 Resposta.innerHTML = "<br>Ambas possuem a mesma idade cronológica";
            }
      }              
    }
}