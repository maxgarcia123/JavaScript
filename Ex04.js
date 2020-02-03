function ex04() {
    var vet = []
    var mediaSalario = 0;
    var menoridade = 1000000000;
    var quantidade = 0;
    for (i = 0; i < 3; i++){
        var objeto = {}
        objeto.renda = parseFloat(prompt('Digite o renda familiar'));
        objeto.idade = Number(prompt('Digite a idade:'));
        objeto.quantidadedeFilhos = Number(prompt('Digite a quantidadede filhos:'));
        objeto.sexo = prompt('Digite o sexo do habitante: ');
        vet.push(objeto);
    }
    for(i = 0; i < 3; i++){
        mediaSalario += vet[i].renda;
        if(vet[i].idade < menoridade){
            menoriddade = vet[i].idade
        }
        if(vet[i].sexo == 'F' && vet[i].quantidadedeFilhos == 2 && vet[i].renda < 600){
            quantidade++;
        }
    }
    console.log('A média entre os salarios é: ', mediaSalario/vet.length);
    console.log('A menor idade é: ', menoridade);
    console.log('A quantidade de mulheres é: ',quantidade);
}