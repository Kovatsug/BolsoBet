let fichas = Number(document.querySelector(".fichas").textContent);

const rolarDados = document.querySelector(".rolarDados");
const numeroDado = document.querySelector(".numero-dado");
const escolha = document.querySelector(".escolha");

rolarDados.addEventListener("click", () => {
  const aposta = document.querySelector(".aposta");
  const numero = document.querySelector(".numero");

  const numeroBot = Math.round(Math.random() * 100);
  const valor = escolha.options[escolha.selectedIndex].text;

  if escolha === "Maior"
});
