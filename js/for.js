// let contador = 1
// while(contador <= 100) {
//     contador++
//
const alumnosCurso = [ "Pedro", "Maria", "Miguel", "Ana", "Oli", "Matias", "Daniela", "Lili", "Fernando" ] 


// *FOR convencional
for( let i = 0;   i < alumnosCurso.length;   i++ ) {

    console.log(  alumnosCurso[i]  )

}

// *FOR OF
for(let alumno of alumnosCurso) {


    console.log(alumno)


}


alumnosCurso.push("John")