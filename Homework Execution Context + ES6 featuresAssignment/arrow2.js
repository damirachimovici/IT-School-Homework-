let largerElem = (arr, elem) => {         // definim functia si argumentele 

  return arr.filter((item) => {           // ne folosim de metoda filter pentru a returna...
    return item > elem                    // ... un array cu elemente mai mici decat cele mentionate in al doilea argument din functie
  })
}