var textInput = document.querySelector("#input__texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;

    var resultoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input__texto">' + resultoCripto + '</textarea>' + '<button class="btn__copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var texto = textInput.value;

    var resultoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input__texto">' + resultoDescripto + '</textarea>' + '<button class="btn__copiar" id="copiar" onclick="copiar()">copiar</button>'
}

function copiar() {
    var textoCopiar = document.getElementById('input__texto');

    textoCopiar.select();
    document.execCommand('copy');
    alert("Texto Copiado!");
}