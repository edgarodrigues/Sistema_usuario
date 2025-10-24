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

function funcionamentoBotao() {
    const botoesCalculadora = document.getElementById('botões')
    const numeroCalculadora = document.getElementById('número')
    const sinalCalculadora = document.getElementById('sinalCalculadora')
    const sinalIgual = document.getElementById('sinalIgual')

    const botoescalculadoraValue = botoescalculadoraCampo.value
    const numerocalculadoraValue = numerocalculadoraCampo.value
    const sinalcalculadoraValue = sinalcalculadoraCampo.value
    const sinaligualValue = sinaligualCampo.value
    const resultadoValue = resultadoCampo.value

    botoescalculadoraCampo.value = ''
    numerocalculadoraCampo.value = ''
    sinalcalculadoraCampo.value = ''
    sinaligualCampo.value = ''
    resultadoCampo.value = ''

    var expressao = document.getElementById("resultado").value;
    var numero = parseFloat(expressao);
    var botaoCalculadora = parseFloat(expressao);
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

function fazerbotaoFuncionar() {
    const botaoNumero = document.getElementById('botão');
    const botaoSinal = document.getElementById('botão');
    const botaoSinalIgual = document.getElementById('botão');
    botao.addEventListener('click', funcionamentoBotao);
    const numero = listaNumeros[index]
    const numeros = document.getElementById('numeros-digitados')
    calculadora.innerHTML = ''
    listaNumeros.splice(index, 1)
    const itemLista = document.createElement('li')
    itemLista.classNumero = 'lista-item'
    itemLista.textContent = 'Digitando numero: ' + numero.calculadora + ' - ' + sinal.calculadora + ' - ' + igual.calculadora
    const botaoCalcular = document.createElement('button')
    botaoCalcular.className = 'btn btn-danger'

    const botao = document.createElement('button')
    botao.classNumero = 'btn btn-warning'

    botaoEditar.textContent = 'Salvar Edição'
    botaoEditar.style.marginLeft = '10px'
    botaoCalcular.onclick = () => salvarNumeros()

    itemLista.appendChild(botaoCalcular)
    numeros.appendChild(itemLista)

    botoescalculadoraCampo.value = botoes.calculadora
    numerocalculadoraCampo.value = numero.calculadora
    sinalcalculadoraCampo.value = sinal.calculadora
    sinaligualCampo.value = sinaligual.calculadora
    resultadoCampo.value = resultado.calculadora

    exibirNumeros()
    botoescalculadoraCampo.focus()
    numerocalculadoraCampo.focus()
    sinalcalculadoraCampo.focus()


    sinaligualCampo.focus()
    resultadoCampo.focus()
}

console.log("Botão funcionando!");
fazerbotaoFuncionar();

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

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}





































