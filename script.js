function calcular() {
    var expressao = document.getElementById("resultado").value;
    try {
        // Usa a função eval para calcular a expressão, mas com cuidado!
        // É mais seguro usar outras bibliotecas para cálculos complexos ou inseguros.
        var resultado = eval(expressao);
        document.getElementById("resultado").value = resultado;
    } catch (error) {
        document.getElementById("resultado").value = "Erro";
    }
}














