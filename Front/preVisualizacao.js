

const titulo = document.getElementById("titulo");
const tipo = document.getElementById("tipo");
const avaliacao = document.getElementById("avaliacao");
const capa = document.getElementById("capa");


const nomeCard = document.querySelector(".nome");
const categoriaCard = document.querySelector(".categoria");
const avaliacaoCard = document.querySelector(".avaliacao");
const card = document.querySelector(".card");



titulo.addEventListener("input", () => {
  nomeCard.textContent = titulo.value ;
});


tipo.addEventListener("change", () => {
  categoriaCard.textContent = tipo.value;
});


avaliacao.addEventListener("input", () => {
  avaliacaoCard.textContent = avaliacao.value;
});

capa.addEventListener("input", () =>{
       card.style.backgroundImage = `url('${capa.value}')`;
});
