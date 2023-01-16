function calculadora(){
    const operacao = Number(prompt('Escolha uma opção:\n 1 - Soma (+)\n 2 - Subtração ( - )\n 3 - Multiplicação ( * )\n 4 - Divisão Real ( / )\n 5 - Resto da Divisão ( % )\n 6 - Poteciação ( ** ) '))

    if ( !operacao || operacao >= 7){ // verificar a opção dos valor digitado
        alert ( 'Erro! opção inválida ')
        calculadora()
    } else {

        let n1 = Number(prompt('Insira o primeiro valor'))
        let n2 = Number(prompt('Insira o segundo valor'))
        let resultado

        if ( !n1 || !n2) { // verificar a opção dos valor digitado
            alert ( 'Erro! opção inválida')
            calculadora()
        } else { 
            function soma() {
                resultado = n1 + n2
                alert( `${n1} + ${n2} = ${resultado}` )
                novaOperacao()
            }

            function subtracao() {
                resultado = n1 - n2
                alert( `${n1} - ${n2} = ${resultado}` )
                novaOperacao()
            }

            function mutiplicacao() {
                resultado = n1 * n2
                alert( `${n1} * ${n2} = ${resultado}` )
                novaOperacao()
            }

            function divisaoReal() {
                resultado = n1 / n2
                alert( `${n1} / ${n2} = ${resultado}` )
                novaOperacao()
            }

            function restoDivisao() {
                resultado = n1 % n2
                alert( `O resto da divisão de ${n1} e ${n2} = ${resultado}` )
                novaOperacao()
            }

            function potenciacao(){
                resultado = n1 ** n2
                alert( `${n1} elevado a ${n2} = ${resultado}` )
                novaOperacao()
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - sim\n 2 - não')

                if ( opcao == 1 ) {
                    calculadora()
                }else if ( opcao == 2 ) {
                    alert ( 'Até mais!' )
                }else {
                    alert ( 'Opção inválida!' )
                    novaOperacao()
                }
            }
        }

        switch (operacao) {
            case 1:
                soma()
                break
            case 2:
                subtracao()
                break
            case 3:
                mutiplicacao()
                break
            case 4:
                divisaoReal()
                break
            case 5:
                restoDivisao()
                break
            case 6:
                potenciacao()
                default
        }
        /* if (operacao == 1) {
            soma()
        } else if (operacao == 2) {
            subtracao()
        } else if (operacao == 3) {
            mutiplicacao()
        } else if (operacao == 4) {
            divisaoReal()
        } else if (operacao == 5) {
            restoDivisao()
        } else if (operacao == 6 ){
            potenciacao()
        } */
    }
}
calculadora()