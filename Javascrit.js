function ex03() {
    let i;
    let codigo = [];
    let estoque = [];
    let pedidos = [];
    for (i = 0; i <= 10; i++) {
        codigo.push(Number(prompt('Digite o código do produto: ')));
        estoque.push(Number(prompt('Digite a quantidade em estoque: ')));
    }
    let cliente = Number(prompt('Informe o codigo do produto: '))
    while (cliente != 0) {
        let codigoproduto = Number(prompt('Digite o código do produto: '))
        let quantidade = Number(prompt('Digite a quantidade em estoque: '))
        let auxPosicao = codigo.indexOf(codigoproduto)
        if(auxPosicao == -1){
            alert('Produto não existe')

        }
        else{
            if(estoque[auxPosicao] - quantidade >= 0 ){
                estoque[auxPosicao] = estoque[auxPosicao] - quantidade
            }
            else{
                alert('Não tem estoque')
            }
        }       
        cliente = Number(prompt('Informe o código do cliente' + 'Digite 0 para encerrar'))

    }
}
function ex05() {
    let codigoLogica = []
    let codigoLogicaProgramação = []
    let logicaeProgramação = []

    for (i = 0; i < 10; i++) {
        codigoLogica.push(Number(prompt('Digite o numero da matricula: ')));
    }
    for (j = 0; j < 5; j++) {
        codigoLogicaProgramação.push(Number(prompt('Digite o numero da matricula do curso de programação: ')))
    }
    for (i = 0; i < 10; i++) {
        if (codigoLogicaProgramação.indexOf(logica[i]) != -1) {
            logicaeProgramação.push(codigoLogica[i])
        }
        
    }
    console.log('Alunos com o mesmo código: ', logicaeProgramação)
}
function ex06() {
    let nomesVendedores = []
    let totaldeVendas = []
    let comissaoVendedores = []
    let valortotalVendas = 0
    let maior = 0;
    let menor = 10000000;
    let nomemaior = nomesVendedores[0]
    let nomemenor = nomesVendedores[0]
    for (i = 0; i < 5; i++) {
        nomesVendedores.push(prompt('Digite o nome do vendedor: '))
        totaldeVendas.push(Number(prompt('Digite o numero de vendas desse vendedor: ')))
        comissaoVendedores.push(prompt('Digite a comissão deste vendedor: '))
        
    }
    var receber = [];
    for( var i = 0; i< 5; i++){
        receber.push(totaldeVendas[i]*comissaoVendedores[i]/100);
    }
    console.log(nomesVendedores + '\n' + receber);
    console.log(nomesVendedores + '\n' + totaldeVendas);

    for (i = 0; i < totaldeVendas.length; i++) {
        if (receber[i] > maior) {
            maior = receber[i]
            nomemaior = nomesVendedores[i]
        }
        if(receber[i]< menor){
            menor = receber[i]
            nomemenor = nomesVendedores[i]
        }
    }
    console.log('O maior valor digitado é: '+ nomemaior+'VALOR:'+maior);
    Console.LOG('O menor valor é: '+ nomemenor+ 'Valor:'+ menor);

}
