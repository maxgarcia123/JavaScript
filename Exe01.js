var button = document.querySelector("button");
button.addEventListener("click", exe01);

function exe01() {
  /*Uma empresa deseja controlar as vendas realizadas por seus vendedores a cada mês, durante o ano todo
    Sabe-se que nessa empresa existem quatro vendedores.
    É importante que esse controle seja automatizado, porque muitas consultas devem ser respondidas imediatamnte
    O gerente necessita de um meio para cadastrar as vendas de todos vendedores e depois, precisa ver um menu com as seguintes opçoes:
        1- Cadastrar vendedor
        2- Cadastrar venda
        3 - Consultar o total das vendas de um funcionario em um determinado mês
        4- Consultar o total das vendas de determinado vendedor
        5 - Mostrar o numero do vendedor que mais vendeu em determinado mes
        6 - Mostrar o número do mes com mais vendas
        7 - Finalizar o programa*/

  let i, opcao, x, cod, mes, soma, maior, maiorNome, melhorMes, total, maiorMes;
  let vendedor = [],
    vendas = [];
  let data = new Date();
  let objeto = {};
  let meses = data.getMonth();
  for (i = 0; i < 4; i++) {
    objeto = {};
    objeto.nome = prompt("Nome do vendedor: ");
    objeto.codigo = Number(prompt("Codigo de " + objeto.nome + ": "));
    alert(
      "Já se passaram " +
        meses +
        " meses desde o começo do ano, necessario cadastrar vendas dos meses anteriores"
    );
    vendas = []; // inicia-se vetor de vendas para a vendedor em especifico
    for (x = 1; x <= meses; x++) {
      vendas.push(
        Number(
          prompt("Valor vendido por " + objeto.nome + " no mes " + x + ": R$")
        )
      ); //alimenta o vetor de vendas
    }
    objeto.valor = vendas; //torna o vetor um metodo do objeto
    vendedor.push(objeto); //insere no vetor
  }
  alert(
    "Os quatro vendedores da loja foram cadastrados com sucesso! Ao contratar novos funcionarios, cadastre-os pelo menu..."
  );
  alert(
    "Menu de escolhas:" +
      "\n1- Cadastrar vendedor" +
      "\n2- Cadastrar venda" +
      "\n3 - Consultar o total das vendas de um funcionario em um determinado mês" +
      "\n4- Consultar o total das vendas de determinado vendedor" +
      "\n5 - Mostrar o numero do vendedor que mais vendeu em determinado mes" +
      "\n6 - Mostrar o número do mes com mais vendas" +
      "\n7 - Finalizar o programa"
  );
  opcao = Number(prompt("Opção desejada: "));
  while (opcao != 7) {
    switch (opcao) {
      case 1: //Insere novo vendedor -- Mesmo procedimento que os quatro primeiros
        objeto = {};
        objeto.nome = prompt("Nome do vendedor: ");
        objeto.codigo = Number(prompt("Codigo de " + objeto.nome + ": "));
        alert(
          "Já se passaram " +
            meses +
            " meses desde o começo do ano, necessario cadastrar vendas dos meses anteriores"
        );
        vendas = [];
        for (x = 1; x <= meses; x++) {
          vendas.push(
            Number(
              prompt(
                "Valor vendido por " + objeto.nome + " no mes " + x + ": R$"
              )
            )
          );
        }
        objeto.valor = vendas;
        vendedor.push(objeto);
        break;
      case 2: //Modifica venda
        cod = Number(prompt("Codigo do vendedor: "));
        mes = Number(prompt("Mês desejado: ")); //janeiro = 0
        mes = mes - 1; //necessario pois começa no 0
        for (i = 0; i < vendedor.length; i++) {
          if (cod == vendedor[i].codigo) {
            vendedor[i].valor[mes] = Number(prompt("Valor da venda: ")); //meses +1 para ficar no mes certo
            alert("Total do mes " + (mes + 1) + " alterado com sucesso!");
          }
        }
        break;
      case 3:
        cod = Number(prompt("Codigo do funcionario: "));
        for (i = 0; i < vendedor.length; i++) {
          if (cod == vendedor[i].codigo) {
            mes = Number(prompt("Mês desejado: ")); //janeiro = 0
            mes = mes - 1; //necessario pois começa no 0
            alert(
              "Vendedor -- " +
                vendedor[i].nome +
                "\nTotal das vendas no mes" +
                (mes + 1) +
                ": R$" +
                vendedor[i].valor[mes].toFixed(2)
            );
          }
        }
        break;
      case 4:
        soma = 0;
        cod = Number(prompt("Codigo do funcionario: "));
        for (i = 0; i < vendedor.length; i++) {
          if (cod == vendedor[i].codigo) {
            for (mes = 0; mes <= meses; mes++) {
              soma = soma + vendedor[i].valor[mes];
            }
          }
        }
        alert("O total das vendas de " + " é de R$" + soma.toFixed(2));
        break;
      case 5:
        mes = Number(prompt("Mês: "));
        mes = mes - 1;
        maior = vendedor[0].valor[mes]; // inicia a variavel com o primeiro elemento
        maiorNome = vendedor[0].nome; // inicia a variavel com o primeiro elemento
        for (i = 0; i < vendedor.length; i++) {
          if (vendedor[i].valor[mes] > maior) {
            maior = vendedor[i].valor[mes];
            maiorNome = vendedor[i].nome;
          }
        }
        alert("No mês " + (mes + 1) + " quem vendeu mais foi -- " + maiorNome);
        break;
      case 6:
        for (x = 0; x < meses; x++) {
          for (i = 0; i < vendedor.length; i++) {
            //inicia em janeiro
            total = vendedor[i].valor[0];
            melhorMes = total;
            maiorMes = x;
          }
        }
        for (x = 0; x < meses; x++) {
          for (i = 0; i < vendedor.length; i++) {
            total = vendedor[i].valor[x];
            if (total > melhorMes) {
              melhorMes = total;
              maiorMes = x;
            }
          }
        }
        alert("O mês que vendeu mais foi " + (maiorMes + 1));
        break;
      default:
        break;
    }
    alert(
      "Menu de escolhas:" +
        "\n1- Cadastrar vendedor" +
        "\n2- Cadastrar venda" +
        "\n3 - Consultar o total das vendas de um funcionario em um determinado mês" +
        "\n4 - Consultar o total das vendas de determinado vendedor" +
        "\n5 - Mostrar o numero do vendedor que mais vendeu em determinado mes" +
        "\n6 - Mostrar o número do mes com mais vendas" +
        "\n7 - Finalizar o programa"
    );
    opcao = Number(prompt("Opção desejada (7-Finaliza): "));
  }
}