let edadCliente

do {

    edadCliente = parseInt(prompt("Ingrese edad de cliente"));

} while( isNaN(edadCliente) || edadCliente > 120 || edadCliente  <= 0   )



// while( isNaN(edadCliente) || edadCliente > 120 || edadCliente  <= 0   ) {
//     // Le vuelvo a pedir que haga un prompt
//     edadCliente = parseInt(prompt("Ingrese edad de cliente"));
// }




console.log(edadCliente)