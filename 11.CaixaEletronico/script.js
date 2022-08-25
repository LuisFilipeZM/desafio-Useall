let n100 = 0, n50 = 0, n20 = 0, n10 = 0;

var saque = parseFloat(prompt("Digite o valor a ser sacado:\n\nNotas disponiveis: R$ 100,00, R$ 50,00, R$ 20,00, R$ 10,00"));

do {
    while (saque >= 100){
        n100++;
        saque = saque - 100;
    }
    while (saque >= 50 && saque < 100){
        n50++;
        saque = saque - 50;
    }
    while (saque >= 20 && saque < 50){
        n20++;
        saque = saque - 20;
    }
    while (saque < 20 && saque >= 10){
        n10++;
        saque = saque - 10;
    }
}while(saque > 10)

alert("Saque efetuado!\nNotas de R$ 100,00 = " + n100 +
        "\nNotas de R$ 50,00 = " + n50 +
        "\nNotas de R$ 20,00 = " + n20 +
        "\nNotas de R$ 10,00 = " + n10);
