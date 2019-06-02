function calculo() {
    var inputA = document.all['a'];
    var inputB = document.all['b'];
    var inputC = document.all['c'];
    var Resposta = document.all['resposta']

    var a = Number(inputA.value);
    var b = Number(inputB.value);
    var c = Number(inputC.value);
    var M = Number((a + b + c) / 3);

    if (M < 5 ) {
        Resposta.innerHTML = '<br>Conceito E'
        Resposta.innerHTML += "<br>E a sua nota final é: " + M.toFixed(2);
    } if (M >= 5.0 & M < 6) {
        Resposta.innerHTML = '<br>Conceito D'
        Resposta.innerHTML += "<br>E a sua nota final é: " + M.toFixed(2);
    }
    if (M >= 6.0 & M < 7) {
        Resposta.innerHTML = '<br>Conceito C'
        Resposta.innerHTML += "<br>E a sua nota final é: " + M.toFixed(2);
    }
    if (M >= 7.0 & M < 8) {
        Resposta.innerHTML = '<br>Conceito B'
        Resposta.innerHTML += "<br>E a sua nota final é: " + M.toFixed(2);
    }
    else if(M >= 8) {
        Resposta.innerHTML = '<br>Conceito A'
        Resposta.innerHTML += "<br>E a sua nota final é: " + M.toFixed(2);
    }
}
