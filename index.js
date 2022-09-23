const numeroSecreto = parseInt(Math.random() * 11); // gerando um número aleatorio de 0 a 10

function Chutar() {
  let elementoResultado = document.getElementById("resultado");
  let chute = Number(document.getElementById("valor").value); // getElementById: busca o elemento pelo id ou pela classe

  if(chute === numeroSecreto) {
    elementoResultado.textContent = "Parabéns, você acertou!";
  } else if(chute > 10 || chute < 0) {
    elementoResultado.textContent = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.textContent = "Infelizmente não acertou, tente novamente.";
  }
}
