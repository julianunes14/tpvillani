function calculo(){
    var Resposta=document.all["resposta"];  
    var a1=150;
    var a2=100;
    var contador=1
for (var i=0; i<25; i++){
    var d = prompt('Digite um salário: ');
    d=Number(d);
      if (d <= 500){

          d = d + (d * 0.05);
      }
            else if (d <= 1200){
      d = d + (d * 0.12);      
}
      if(d <= 600){
           d = d + a1;

      }       
      if( d > 600){
          d = d + a2;

      }
        Resposta.innerHTML += '<br>'+ contador +'° salário: R$'+ d;
contador++;
     }







}