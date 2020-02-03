function ex03(){
    var vet = [];
    var mediaOlhoseAltura = 0;
    var maior = 0;
    var quantidadeHomens = 0;
    var percentual = 0;
    for(i=0;i<3;i++){
        var objeto = {}
        objeto.sexo = prompt('Digite o sexo: '); 
        objeto.altura = parseFloat(prompt('Digite a altura: '));
        objeto.idade = Number(prompt('Digite a idade: '));
        objeto.cor = prompt('Digite a cor dos olhos: ');
    }
    for(i=0;i<3;i++){
        if((vet[i].cor == 'C') && (vet[i].altura > 1.60)){
            mediaOlhoseAltura += vet[i].idade;
        }
        if(maior < vet[i].idade){
            maior = vet[i].idade
        }
        if(vet[i].sexo == 'M'){
            quantidadeHomens++;
        }
        percentual = (quantidadeHomens/vet.length)*100;
    }
    console.log('A media de idade de pessoas com olhos castanhos e altura maior que 1,60 é: ',mediaOlhoseAltura/vet.length);
    console.log('O percentual de Homens é: ',percentual);
}