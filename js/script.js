// ativar links do menu
const links = document.querySelectorAll(".header-menu a");
function ativarlink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarlink);

// ativar itens do orçamento
const parametros = new URLSearchParams(location.search);
function ativarproduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarproduto);

//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarpergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}
function eventosperguntas(pergunta) {
  pergunta.addEventListener("click", ativarpergunta);
  console.log(pergunta);
}
perguntas.forEach(eventosperguntas);

// galeria de bicicletas

const container = document.querySelector(".bicicleta-imagens");
const imagens = document.querySelectorAll(".bicicleta-imagens img");

function trocarImagem(event) {
  const clique = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;

  if (media) {
    container.prepend(clique);
  }
}
function eventoImagem(links) {
  links.addEventListener("click", trocarImagem);
}
imagens.forEach(eventoImagem);
