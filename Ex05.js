function ex05() {
    var vet = [];
    for (i = 0; i < 5; i++) {
        var objeto = {}
        //adiciona dados no objeto
        objeto.código = Number(prompt('Digite o código: '));
        objeto.descricao = prompt('Digite uma descrição: ');
        objeto.valor = Number(prompt('Digite o valor do produto: '))
        objeto.quantidade = Number(prompt('Digite a quantidade em estoque: '));
        //coloca o objeto no vetor de forma ordenado
        for (var j = 0; j < vet.length; j++) {//varredura do vetor
            if (objeto.código < vet[j].código) {//procura por um elemento maior
                vet.slice(j, 0, objeto);//coloca na posição j
                alert('Adicionado com sucesso');
                break;//sai do laço 
            }
        }
        if(j == vet.length){//adiciona na ultima ou na primeira posição 
            vet.push(objeto);
            alert('Adicionado com sucesso');
        }
    }
    //permição para alterar os valores:
    
    var cod = Number(prompt('Deseja editar o produto com qual código: '))
    for(i=0; i < 5; i++ ){
        if(cod == vet[i].código){
            vet[i].descricao = prompt('Digite uma descrição: ');
            vet[i].valor = Number(prompt('Digite o valor do produto: '))
            vet[i].quantidade = Number(prompt('Digite a quantidade em estoque: '));
            break;    
        }
        if(i == 5){
            alert('Produto não existe');
        }
    }
    for(i=0; i < vet.length; i++ ){
        alert(vet[i].código);
    }

}