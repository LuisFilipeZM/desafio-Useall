let escolha = prompt("Escolha uma opção!\n1 - Media aritimética de 3 valores\n2 - Media aritimética de valores valores digitados");

var opt = 1;
var total = 0;
var count = 0;

switch (escolha) {
    case '1':
        do {
            var n1 = parseFloat(prompt("Digite o primeiro valor:"));
            if (isNaN(n1)) {
                alert("Entrada invalida! São permitidos apenas números");
            };
        }while (isNaN(n1));
        do {
            var n2 = parseFloat(prompt("Digite o segundo valor:"));
            if (isNaN(n2)) {
                alert("Entrada invalida! São permitidos apenas números");
            };
        }while (isNaN(n2));
        do {
            var n3 = parseFloat(prompt("Digite o terceiro valor:"));
            if (isNaN(n3)) {
                alert("Entrada invalida! São permitidos apenas números");
            };
        }while (isNaN(n3));

        var media = (n1 + n2 + n3) / 3;

        alert("Media = " + media);
        break;

    case '2':
        while(opt == 1){
            var valor = parseFloat(prompt("Digite um valor:"));
            total = total + valor;
            count++;
            alert(total);
            opt = prompt("Continua?\n1 - SIM\n2 - NÃO");
        }

        var media = total / count;
        alert("Media: " + media);
        break;
}