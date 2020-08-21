// Insere números e operadores no display
function insert(num) {
  var display = document.getElementById('display');
  display.value += num;
}

// Calcula a expressão digitada e retorna seu resultado na tela
function igual() {
  var display = document.getElementById('display');
  var expressao = display.value;
  if(expressao) {
    display.value = eval(expressao);
  }
}

// Apaga o conteúdo do display da calculadora
function limpar() {
  var display = document.getElementById('display');
  display.value = '';
}

// Apaga o último elemento digitado
function voltar() {
  var display = document.getElementById('display');
  var expressao = display.value;
  display.value = expressao.substring(0,expressao.length-1);
}

// Converte o sinal
function mudasinal() {
  var display = document.getElementById('display');
  display.value = display.value * -1;
}