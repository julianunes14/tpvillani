function crescente() {
    var inputA = document.all['a'];
    var inputB = document.all['b'];
    var inputC = document.all['c'];
    var Resposta = document.all['resposta']

    var a = Number(inputA.value);
    var b = Number(inputB.value);
    var c = Number(inputC.value);

    if (a < b & b < c ) {
        Resposta.innerHTML ='<br>' + a + "," + b + "," + c ;
    } else if (a < c & c < b) {
        Resposta.innerHTML = '<br>'+ a + "," + c + "," + b ;
    }
     else if (b < a & a < c) {
        Resposta.innerHTML = '<br>'+ b + "," + a + "," + c ;
    }
    else if (b < c & c < a) {
        Resposta.innerHTML = '<br>'+ b + "," + c + "," + a ;
    }
    else if(c < a & a < b) {
        Resposta.innerHTML = '<br>'+ c + "," + a +"," + b ;
    }
    else if(c < b & b < a) {
        Resposta.innerHTML = '<br>'+ c + "," + b + "," + a ;
}
    else {
        Resposta.innerHTML = '<br>Use números diferentes!'
    }

}