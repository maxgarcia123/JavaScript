
let linguagem = []
let notas = []
let continente = []
let somaExc = [];
function programa() {
  entradaDeDados()
}

function entradaDeDados() {
 // <===========================/Item A/=======================> //
  for(i = 0; i < 3; i++ ){
    linguagem.push(prompt('Digite linguaguem: '));
  }
  for(j = 0; j < 4; j++){
    continente.push(prompt('continentes: '));
  }
  for(i = 0;i < linguagem.length ; i++){
    notas[i] = [];  
    for(j = 0; j < continente.length; j++){
      notas[i][j] = prompt('notas: ');
    }
  for(i = 0;i < linguagem.length ; i++){  
    for(j = 0; j < continente.length; j++){
      if((notas[i][j] === "e")|| (notas[i][j] === "E")){
        somaExc++
      }    
    }
    console.log( `linguagem: ${linguagem} tem ${somaExc} execelente`)
  }
    // <===========================/Item B/=======================> //
    
  }
  
  for(var j = 0; j < 4; j++){
    var notas = [0,0,0,0,0]
    for(i=0; i < 5; i++){
      switch(mat[i][j]){
        case 'E' : notas[0]++; break;
        case 'MB' : notas[1]++; break;
        case 'B' : notas[2]++; break;
        case 'F' : notas[3]++; break;
        case 'MF' : notas[4]++; break;
    }
  }
  var aux = notas.reduce((maior,proximo) => 
    maior > proximo ? maior : proximo)
  console.log(notas.indexOf(aux))
}
}