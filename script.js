function calcular() {
    var expressao = document.getElementById("resultado").value;
    var numero = parseFloat(expressao);
    var resultado = 0;
    if (!isNaN(numero)) {
        resultado = numero;
    }
    try {
        // Usa a função eval para calcular a expressão, mas com cuidado!
        // É mais seguro usar outras bibliotecas para cálculos complexos ou inseguros.
        var resultado = eval(expressao);
        document.getElementById("resultado").value = resultado;
    } catch (error) {
        document.getElementById("resultado").value = "Erro";
        console.error("Erro ao calcular a expressão:", error);
    }
}

n1 = float(input("Insira o primeiro número: "))
operacao = input("Insira a operação (+, -, *, /): ")
n2 = float(input("Insira o segundo número: "))
n3 = float(input("Insira o sinal de igual: "))

// Suponha que você já tenha elementos HTML para os botões 'igual' e 'calcular'
// E que você já tenha a lógica para o 'calcular' em uma função chamada 'calcularResultado()'

let botaoIgual = document.getElementById('botao-igual');
let botaoNumero = document.getElementById('botao-numero');
let botaoCalcular = document.getElementById('botao-calcular');
let display = document.getElementById('resultado');

// Função que executa o cálculo (você precisará implementar isso)
function calcularResultado() {
    // Lógica para buscar os valores, operação e calcular o resultado
    // e então exibir na tela da calculadora
    console.log("Resultado calculado!");
    calcular(); // Chama a função de cálculo
}

// Atribui a função de cálculo ao clique do botão "Igual"
botaoIgual.addEventListener('click', calcularResultado);

// Se você quer que o botão de número execute essa função,
// adicione-o também:
botaoNumero.addEventListener('click', calcularResultado);

// Se você quer que o botão "Calcular" também execute essa função,
// adicione-o também:
botaoCalcular.addEventListener('click', calcularResultado);


// Opcional: Se você quiser que o botão "Igual" *substitua* o "Calcular"
// (ou seja, se o "Calcular" não precisar mais da função), você pode
// remover seu listener e apenas usar o "Igual"
// botaoCalcular.removeEventListener('click', calcularResultado);















































