function vetor() {
    var vet = [];
    var totalquantidade = 0;
    //Cria objeto
    for (i = 0; i < 5; i++) {
        var objeto = {}
        objeto.codigo = Number(prompt('Informe o código: '));
        objeto.nome = prompt('Informe o nome: ');
        objeto.quantidade = Number(prompt('Informe a quantidade: '));
        objeto.preco = Number(prompt('Informe o preço: '));
        vet.push(objeto);
        alert('produto criado com sucesso');
    }
    for(i = 0; i < 5; i++){
        totalquantidade += vet[i].quantidade;
    }
    console.log('Qauntidade de estoque:' + totalquantidade);
}