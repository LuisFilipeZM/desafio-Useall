do {
    var altura = prompt("Digite a altura(m):\nExemplo: 1.90")
    if (isNaN(altura)) {
        alert("Altura invalida! São permitidos apenas números"); 
    };
}while(isNaN(altura));

do {
    var peso = prompt("Digite o peso(kg):");
    if (isNaN(peso)) {
        alert("Peso invalido! São permitidos apenas números");
    };
}while (isNaN(peso));

var imc = Math.round(peso / (altura * altura));

if (imc < 18) {
    alert("IMC: " + imc + " - Abaixo do peso");
}else if (imc >= 18 && imc <= 25){
    alert("IMC: " + imc + " - Peso normal");
}else if (imc > 25) {
    alert("IMC: " + imc + " - Acima do peso");
};
