let numero = 190;

let numeroMaximo = 176;

// while( iteraciones <= 30 ) {
//     document.write(`${iteraciones} - Hola desde document write <br>`);
//     iteraciones = iteraciones + 1;
// }

while(numero <= numeroMaximo) {
    if(numero % 7 === 0 ) {
        document.write(`El número ${numero} es multiplo de 2 <br>`)
    }

    numero++;
    //pasando por todos los numeros hasta llegar al 176 inclusive quiero que me impriman en el documento todos los números pares 
    //pregunto si el número que estoy iterando es multiplo hago un document write en el documento.
    //Indicando que el número X es multiplo de 2.
}



document.write(`Luego del while`)