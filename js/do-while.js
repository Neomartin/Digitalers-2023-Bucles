let edadCliente = parseInt(    prompt("Ingrese edad de cliente")     ); //NaN


while( isNaN(edadCliente) || edadCliente > 120 || edadCliente  <= 0   ) {


    // Le vuelvo a pedir que haga un prompt
    edadCliente = parseInt(prompt("Ingrese edad de cliente"));

    
}




console.log(edadCliente)