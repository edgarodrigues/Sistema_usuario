def main():
    calculadora()

    print(f"O resultado é: {resultado}")
def calculadora():
    print("Bem-vindo à calculadora simples!")

if __name__ == "__main__":
    main()# Uma calculadora simples que realiza operações básicas
# Uma calculadora simples que realiza operações básicas
def calculadora():
    print("Bem-vindo à calculadora simples!")
    # Solicita ao usuário os números e a operação
    numero1_str = input("Digite o primeiro número: ")
    numero1 = float(numero1_str)
    operacao = input("Digite a operação (+, -, *, /): ")
    numero2_str = input("Digite o segundo número: ")
    numero2 = float(numero2_str)

    # Realiza a operação com base na entrada do usuário
    if operacao == '+':
        resultado = numero1 + numero2
    elif operacao == '-':
        resultado = numero1 - numero2
    elif operacao == '*':
        resultado = numero1 * numero2
    elif operacao == '/':
        if numero2 != 0:
            resultado = numero1 / numero2
        else:
            resultado = "Erro: Divisão por zero"

    else:
        resultado = "Erro: Operação inválida"

    return resultado
def main()::
    resultado = calculadora()

    print(f"O resultado é: {resultado}")
def main():
    resultado = calculadora()

    print(f"O resultado é: {resultado}")

if __name__ == "__main__"::
    main()

def main():
    resultado = calculadora()



        


