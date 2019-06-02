function primo(){
    var inputNumero=document.all['num'];
    var Resposta=document.all['resposta'];

    var numero=Number(inputNumero.value);
    var control=0;
    var conta=1;

    for(var i=1; i<=numero;i++){
        conta=numero % i;
            if(conta==0){
                control=control+1;            
                }
                           

    }
   if(control==2){       
       Resposta.style.color='yellow';
       Resposta.innerHTML='<br><strong> O número é primo!!!';
  }
   else{
       Resposta.style.color='white';
       Resposta.innerHTML='<br><strong> O número não é primo!';
   }
}