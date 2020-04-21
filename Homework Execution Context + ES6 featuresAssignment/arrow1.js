let Unique = (String) => {                                         //definim functia + parametrul 
 var str=String;                                                   
 var uniql="";                                                     //definim variabilele 
 for (var i=0;i < str.length;i++)                                  //loop-ul care va trece prin string-ul de rigoare
 { 
 if(uniql.indexOf(str.charAt(i))==-1)                              //o preconditie care prezuma ca daca indexul unui caracter este -1, ...
  {
  uniql += str[i];                                                 //...scadem din valoarea string-ului, acel "surplus" (pe principiul - x + = -)
  
   }
  }
  return uniql;                                                    //returnam
}  


// am trisat putin, cautand rezolvarea pe net :)) (asta dupa ce m-am jucat vreo ora in consola). am revenit peste o zi, reusind in final sa il rezolv 