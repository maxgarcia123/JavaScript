function ex02() {
    var vet = []
    var mediaSalario = 0;
    var mediaFilhos = 0;
    var maiorSalario = 0;
    var quantidadede = 0;
    var percentual = 0;
    for (i = 0; i < 3; i++){
        var objeto = {}
        objeto.salario = parseFloat(prompt('Digite o salario:'));
        objeto.idade = Number(prompt('Digite a idade:'));
        objeto.quantidadedeFilhos = Number(prompt('Digite a quantidadede filhos:'));
        objeto.sexo = prompt('Digite o sexo do habitante: ');
        vet.push(objeto);
    }
    for(i = 0; i < 3; i++){
        mediaSalario += vet[i].salario;
        mediaFilhos += vet[i].quantidadedeFilhos;
        if(maiorSalario < vet[i].salario){
            maiorSalario = vet[i].salario;
        }
        if((vet[i].sexo == 'F') && (vet[i].salario > 1000)){
            quantidadede++;
        }
    }
    percentual = (quantidadede/3)*100;
    console.log('media de salario é: ',mediaSalario/vet.length);
    console.log('media de filhos é: ',mediaFilhos/vet.length);
    console.log('O maior salario é: ',maiorSalario);
    console.log('Mulheres',percentual); 
}