function ex01() {
    var menu = "[1] - Cadastrar vendedor.\n[2] - Cadastrar venda.\n[3] - Consultar as vendas de funcionário em determinado mês.\n[4] - Consultar o total das vendas de determinado vendedor.\n[5] - Mostrar o número do vendedor que mais vendeu.\n[6] - Mostrar o número do mês com mais vendas.\n[7] - Finalizar o programa.\nSelecione a opção no menu: ";
    var opcao = (menu);
    var vendas = []; var vendedores = [];
    do {
        opcao = Number(prompt(menu));
        switch (opcao) {
            case 1:
                var objeto = {};
                objeto.codigo = Number(prompt('Digite o código: '));
                objeto.nome = prompt('Digite o nome: ');
                vendedores.push(objeto);
                break;
            case 2:
                var objeto = {};
                var cola = '';
                for (var i = 0; i < vendedores.length; i++) {
                    cola += vendedores[i].codigo + " " + vendedores[i].nome + '\n';
                }
                objeto.codigo = Number(prompt('Digite o código: ' + '\n' + "Codigos existentes: " + '\n' + cola));
                objeto.mes = Number(prompt('Digite o mes: '));
                objeto.valor = Number(prompt('Valor da venda: '));
                vendas.push(objeto);
                break;
            case 3:
                var cola = '';
                for (var i = 0; i < vendedores.length; i++) {
                    cola += vendedores[i].codigo + " " + vendedores[i].nome + '\n';
                }
                var code = Number(prompt('Informe o código: ' + '\n' + "Codigos existentes: " + '\n' + cola));
                var mes = Number(prompt('Digite o mes: '));
                for (i = 0; i < vendas.length; i++) {
                    if ((vendas[i].codigo == code) && (vendas[i].mes == mes)) {
                        alert(vendas[i].valor);
                        break;
                    }
                }
                if (i == vendas.length) {// Não encontrou a venda
                    alert('A venda não existe');
                }

                break;
            case 4:
                var cola = '';
                for (i = 0; i < vendedores.length; i++) {
                    cola = cola + vendedores[i].codigo + '' + vendedores[i].nome;
                }
                var soma = 0;
                var codi = Number(prompt('Digite o código: ' + '\n' + cola));
                for (i = 0; i < vendas.length; i++) {
                    if (vendedores[i].codigo == codi) {
                        soma = soma + vendas[i].valor;
                    }

                }
                alert('A soma das vendas é: ' + soma);
                break;
            case 5:
                var mes = Number(prompt('Digite o mes: '))
                var maior = 0;
                var codigo = '';
                for (i = 0; i < vendas.length; i++) {
                    if (vendas[i].mes == mes) {
                        if (vendas[i].valor > maior) {
                            maior = vendas[i].valor;
                            codigo = vendedor[i].codigo;
                        }
                    }

                }
                alert('A maior venda entre os vendeddores é: ', maior, 'que é relacionado com ', codigo);
                break;
            case 6:
                var meses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var maior2 = 0;
                var mesMaior = '';
                for (var i = 0; i < vendas.length; i++) {
                    meses[vendas[i].mes - 1] = meses[vendas[i].mes - 1] + vendas[i].valor
                }
                for (var i = 0; i < meses.length; i++) {
                    if (meses[i] > maior2) {
                        maior2 = meses[i];
                        mesMaior = i + 1;

                    }
                    alert(mesMaior);
                }
                break;
            case 7: alert('Obrigado por usar o programa'); break;
            default: alert('Opção invalida');

        }
    }
    while (opcao != 7);

}