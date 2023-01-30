let numeroparaatualizar = document.getElementById('numeroatualizado');
let numeroatualizado = 0

function increment() {
    numeroatualizado = numeroatualizado + 1;
    numeroparaatualizar.innerHTML = numeroatualizado
}

function decrement() {
    numeroatualizado = numeroatualizado - 1;
    numeroparaatualizar.innerHTML = numeroatualizado
}

function setfrase(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert( setfrase( "Vai Japão", "Japão", "Brasil") )