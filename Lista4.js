const vendasDoDia = [10.70, 5.50, 2.25, 1.0, 55.25, 110.30, 80.0];

    function ex1() {
      let soma = 0;
      for (let i = 0; i < vendasDoDia.length; i++) {
        soma += vendasDoDia[i];
      }
      return soma;
    }

    function ex2() {
      let maiorNumero = vendasDoDia[0];
      let menorNumero = vendasDoDia[0];

      for (let i = 0; i < vendasDoDia.length; i++) {
        if (vendasDoDia[i] > maiorNumero) {
          maiorNumero = vendasDoDia[i];
        }
        if (vendasDoDia[i] < menorNumero) {
          menorNumero = vendasDoDia[i];
        }
      }

      alert("Maior valor: R$" + maiorNumero.toFixed(2) + "\nMenor valor: R$" + menorNumero.toFixed(2));
    }

    function ex3() {
      const ticketMedio = ex1() / vendasDoDia.length;
      alert("O ticket médio é R$" + ticketMedio.toFixed(2));
    }

    function ex4() {
      const lista = [3, 5, 6, 7, 8, 10, 22, 55, 110];
      let contador = 0;

      for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
          contador++;
        }
      }

      alert("Quantidade de números pares: " + contador);
    }

    // Função de menu
    function menu() {
      const opcao = prompt(
        "Escolha uma opção:\n" +
        "1 - Soma das vendas do dia\n" +
        "2 - Maior e menor valor das vendas\n" +
        "3 - Ticket médio das vendas\n" +
        "4 - Contar números pares em uma lista\n"
      );

      switch (opcao) {
        case "1":
          alert("Soma total das vendas: R$" + ex1().toFixed(2));
          break;
        case "2":
          ex2();
          break;
        case "3":
          ex3();
          break;
        case "4":
          ex4();
          break;
        default:
          alert("Opção inválida. Tente novamente.");
      }
    }

    menu();