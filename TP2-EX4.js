function adega(){
    var vinho;
    var tinto=0;
    var branco=0;
    var rose=0;
    var Resposta=document.all['resposta'];
    for(var i=0; i<50; i++){
    var msg = 'Declare o vinho: \n';
          msg += '1 - Tinto \n';
          msg += '2 - Branco \n';
          msg += '3 - Rosê \n';
         vinho=prompt(msg);
         switch(vinho){
             case '1':
           branco++;
           break;
             case '2':
           tinto++;
           break;
             case '3':
           rose++;
           break;
           default:
           alert ('Você selecionou uma opção inválida \n');
           alert ('Reinicie o programa \n');
           return;
              
         }
    }
    Resposta.innerHTML ='<br> Porcentagem de vinhos brancos: ' + (branco / 50)*100 +"% <br>";
    Resposta.innerHTML = '<br> Porcentagem de vinhos tintos: ' + (tinto / 50 )*100 + '% <br>';
    Resposta.innerHTML ='<br> Porcentagem de vinhos rosê: ' + (rose / 50)*100 + '% <br>';
 
}