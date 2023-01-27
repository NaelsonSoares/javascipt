// Comparando Números pares

function comparandoNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return ` ${primeiraFrase} ${segundaFrase} `;

    function criaPrimeiraFrase(num1, num2) {
        let primeiraFrase = ` Os números ${num1} e ${num2}`;
        let simNao = `não`;
        if (num1 === num2) {
            simNao = ` `;
        }
        return ` ${primeiraFrase}  ${simNao} são iguais, ` ;
    }

    function criaSegundaFrase(num1, num2) {
        const soma = num1 + num2;
        let compararDez = `menor do que` ;
        let compararVinte = `menor do que` ;
        if (soma > 10) {
            compararDez = `maior do que` ;
        }else if (soma === 10 ){
            compararDez = ` igual a `
        }
        if (soma > 20) {
            compararVinte = `maior do que` ;
        }else if (soma === 20 ){
            compararVinte = ` igual a `
        }

        return `sua soma é ${soma} que é ${compararDez} 10 e ${compararVinte} 20. ` ;
    }
}
console.log( comparandoNumeros(12, 8) );
