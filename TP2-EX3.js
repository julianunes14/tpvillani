function fibonacci(){
    var inputN1=document.all['num'];
    var N1=Number(inputQnt.value);
    var Resposta=document.all['resposta'];
    
    var f=0,x=0,y=1;
    for(var i=0;i<N1;i++){
        if (i<=1){
            f=i;
        }
        else{
            f=x+y;
            x=y;
            y=f;
        }
        Resposta.innerHTML+= f + ', ';
    }
}