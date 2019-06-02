function fatorar(){
    var inputNumero=document.all['num'];
    var numero=Number(inputNumero.value);
    var resposta=document.all['resposta'];
    var fat=numero;    
   
    for(var i=numero-1; i>0; i--){
        fat=fat*i;                        
    }
 resposta.innerHTML = "<br> Fatorial de " + numero + " é: " + fat
}