function calculo() {
    var inputA = document.all['a'];
    var inputB = document.all['b'];
    var inputC = document.all['c'];
    var Resposta = document.all['resposta']

    var a = Number(inputA.value);
    var b = Number(inputB.value);
    var c = Number(inputC.value);
    var D = Number((b*b)-(4*a*c));

    if(D <= 0){
        Resposta.style.color = 'white';
        Resposta.innerHTML = '<br><strong>A equação não tem solução</strong>'
    }
    else{
     var x1 = ((-b) + (Math.sqrt(D))) / (2*a); 
     var x2 = ((-b) - (Math.sqrt(D))) / (2*a);
     Resposta.style.color = 'yellow';
     Resposta.innerHTML = '<br>Valor de x1: '+ x1 + '<br>Valor de x2: ' + x2;     
    }
}
