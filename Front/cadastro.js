const btnVoltar = document.getElementById("voltar");
btnVoltar.addEventListener("click", () =>{
      window.location.href = "../index.html"; 
});
// pré visualzação
const titulo = document.getElementById("titulo");
const tipo = document.getElementById("tipo");
const avaliacao = document.getElementById("avaliacao");
const capa = document.getElementById("capa");

const nomeCard = document.querySelector(".nome");
const categoriaCard = document.querySelector(".categoria");
const avaliacaoCard = document.querySelector(".avaliacao");
const card = document.querySelector(".card");

titulo.addEventListener("input", () => {
  nomeCard.textContent = titulo.value;
});

tipo.addEventListener("change", () => {
  categoriaCard.textContent = tipo.value;
});

avaliacao.addEventListener("input", () => {
  avaliacaoCard.textContent = avaliacao.value;
});

capa.addEventListener("input", () => {
  card.style.backgroundImage = `url('${capa.value}')`;
});

//validação de dados
const campoAvaliacao = document.querySelector("#avaliacao");
const campoCapa = document.querySelector("#capa");
const campoTitulo = document.querySelector("#titulo");
const campoData = document.querySelector("#data");
const campoTipo = document.querySelector("#tipo");
const campoGenero = document.querySelector("#genero");
const campoSinopse = document.querySelector("#sinopse");
const campoTrailer = document.querySelector("#trailer");


const formCadastrar= document.querySelector("#cadastro");
formCadastrar.addEventListener("submit", (event) =>{
    if(campoAvaliacao.value === "" || campoAvaliacao.value < 0 || campoAvaliacao.value > 10){
      event.preventDefault();
      campoAvaliacao.style.border = "3px solid red";
      campoAvaliacao.value = "";
        campoAvaliacao.setAttribute("Placeholder", "AVALIAÇÃO INCORRETA!");
    }
    if(campoCapa.value === "" ){
      event.preventDefault();
         campoCapa.style.border = "3px solid red";
              campoCapa.setAttribute("Placeholder", "CAMPO OBRIGATORIO!");
    }
    if( campoTitulo.value === ""){
       event.preventDefault();
          campoTitulo.style.border = "3px solid red";
               campoTitulo.setAttribute("Placeholder", "CAMPO OBRIGATORIO!");
    }
    if( campoSinopse.value === ""){
       event.preventDefault();
          campoSinopse.style.border = "3px solid red";
               campoSinopse.setAttribute("Placeholder", "CAMPO OBRIGATORIO!");
    }
     if( campoTrailer.value === ""){
       event.preventDefault();
          campoTrailer.style.border = "3px solid red";
               campoTrailer.setAttribute("Placeholder", "CAMPO OBRIGATORIO!");
    }
    if(!campoData.checkValidity()){
       event.preventDefault();
          campoData.style.border = "3px solid red";
           campoData.setAttribute("Placeholder", "DATA INCORRETA!");
    }
});

