// script.js

export default function apostar(valor) {
  let fichas = parseInt(localStorage.getItem('fichas'));
  
  if (fichas >= valor) {
    fichas -= valor;
    localStorage.setItem('fichas', fichas);
    document.getElementById('fichas').innerText = fichas;
    alert(`Você apostou ${valor} fichas!`);
  } else {
    alert('Você não tem fichas suficientes!');
  }
}
// Função para inicializar o jogo

function inicializarFichas() {
    if (localStorage.getItem('fichas') === null) {
      // Se não houver fichas no localStorage, inicializa com 100
      localStorage.setItem('fichas', 1000);
    }
    document.getElementById('fichas').innerText = localStorage.getItem('fichas');
  }
  
  // Função para apostar
  // Chama a função para inicializar as fichas ao carregar a página
  window.onload = inicializarFichas;
  