let dadosOriginais = [];

carregardados();

async function carregardados() {
  const resposta = await fetch("Back/listar.php");

  console.log(resposta);

  dadosOriginais = await resposta.json();

  mostrarCards(dadosOriginais);
   baner(dadosOriginais);
   addValores();
}
const containerCards = document.querySelector(".container-cards");
const containerCardsFilmes = document.querySelector(".container-cards-filmes");
const containerCardsSeries = document.querySelector(".container-cards-series");

 function criarCard(item) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url('${item.capa}')`;
    const titulo = document.createElement("div");
    titulo.className = "nome";
    titulo.textContent = item.titulo;

    const tipo = document.createElement("div");
    tipo.className = "categoria";
    tipo.textContent = item.tipo;

    const avaliacao = document.createElement("div");
    const estrela = document.createElement("i");
    estrela.className = "bi bi-star";

    avaliacao.className = "avaliacao";
    avaliacao.textContent = item.avaliacao;

    card.appendChild(titulo);
    card.appendChild(tipo);
    card.appendChild(avaliacao);
    avaliacao.appendChild(estrela);
    return card;
  }

function mostrarCards(listaDeDados) {
  const container = document.querySelector(".container-cards");
  container.innerHTML = "";
 containerCardsGenero.innerHTML = "";
  if (listaDeDados.length === 0) {
    container.innerHTML = "Nenhum registro encontrado";
    return;
  }

    listaDeDados.forEach((item) => {
      containerCards.appendChild(criarCard(item));
       
      if (item.tipo == "filme") {
        containerCardsFilmes.appendChild(criarCard(item));
      } else if (item.tipo == "serie") {
        containerCardsSeries.appendChild(criarCard(item));
      }
    });
  }



// codigo para mostrar só o container selecionado
const btnfilme = document.getElementById("fonte-filmes");
const btnserie = document.getElementById("fonte-series");
const btninicio = document.getElementById("fonte-tudo");
const btngeneros = document.getElementById("fonte-generos");
const containerCardsGenero = document.querySelector(".container-cards-genero");
const banner = document.querySelector('article');
  const containerCardsTitulo = document.querySelector(".container-cards-titulo");
 containerCardsTitulo.parentElement.style.display = "none";


btnserie.addEventListener("click", () => {

  containerCardsSeries.parentElement.style.display = "block";
  containerCards.parentElement.style.display = "none";
  containerCardsFilmes.parentElement.style.display = "none";
  containerCardsGenero.parentElement.style.display = "none";
  containerCardsTitulo.parentElement.style.display = "none";
  banner.style.display = "none";
   


});
btnfilme.addEventListener("click", () => {
  containerCardsFilmes.parentElement.style.display = "block";
  containerCards.parentElement.style.display = "none";
  containerCardsSeries.parentElement.style.display = "none";
   containerCardsGenero.parentElement.style.display = "none";
   banner.classList.remove('banner-visivel');
   banner.classList.add('banner-oculto');
     containerCardsTitulo.parentElement.style.display = "none";
     banner.style.display = "none";
});
btninicio.addEventListener("click", () => {
  banner.classList.remove('banner-oculto');
  banner.classList.add('banner-visivel');
  containerCardsFilmes.parentElement.style.display = "block";
  containerCards.parentElement.style.display = "block";
  containerCardsSeries.parentElement.style.display = "block";
   containerCardsGenero.parentElement.style.display = "block";
     containerCardsTitulo.parentElement.style.display = "none";
     banner.style.display = "flex";
});
btngeneros.addEventListener("click", () => {
  containerCardsGenero.parentElement.style.display = "block";
  containerCardsFilmes.parentElement.style.display = "none";
  containerCards.parentElement.style.display = "none";
  containerCardsSeries.parentElement.style.display = "none";
   banner.classList.remove('banner-visivel');
   banner.classList.add('banner-oculto');
     containerCardsTitulo.parentElement.style.display = "none";
     banner.style.display = "none";
});

// banner


let trailerUrl;


const btnEsquerda = document.getElementById("btn-esquerda");
const btnDireita = document.getElementById("btn-direita");
const carrosel = document.querySelector(".carrosel");
const divtitulo = document.querySelector(".titulo");
const divdescricao = document.querySelector(".descricao");
const divbtns = document.querySelector(".btns");
const divano = document.querySelector(".ano");
const titulo = document.createElement("p");
titulo.className = "titulo";
divtitulo.appendChild(titulo);

const data = document.createElement("p");
data.id = "data";
divano.appendChild(data);

const categoria = document.createElement("p");
categoria.id = "categoria";
divano.appendChild(categoria);

const tipo = document.createElement("p");
tipo.id = "tipo";
divano.appendChild(tipo);

const avalia = document.createElement("p");
avalia.id = "avalia";
divano.appendChild(avalia);

const sinopse = document.createElement("p");
sinopse.id = "sinopse";
divdescricao.appendChild(sinopse);

const trailer = document.createElement("button");
trailer.textContent = "Assistir trailer"
trailer.id = "btn-trailer";
divbtns.appendChild(trailer);

const mais = document.createElement("button");
mais.textContent = "Mais informaçoes"
mais.id = "btn-mais";
divbtns.appendChild(mais);

let indice = 0;

const banerCarrosel = [];
const tituloCarrosel = [];
const dataCarrosel = [];
const categoriaCarrosel = [];
const tipoCarrosel = [];
const avaliaCarrosel = [];
const sinopseCarrosel = [];
const trailerCarrosel = [];
const informacoes = document.querySelector(".informacoes");

function baner(listaDeDados){
listaDeDados.forEach((item) => {
  banerCarrosel.push(item.capa);
  tituloCarrosel.push(item.titulo);
  dataCarrosel.push(item.data_de_lançamento.substring(0, 4));
  categoriaCarrosel.push(item.genero);
  tipoCarrosel.push(item.tipo);
  trailerCarrosel.push(item.trailer);
  avaliaCarrosel.push(item.avaliacao);
  sinopseCarrosel.push(item.sinopse);
});
}


function addValores(){
   titulo.textContent = tituloCarrosel[indice];
  data.textContent = dataCarrosel[indice];
  categoria.textContent = categoriaCarrosel[indice];
  tipo.textContent = tipoCarrosel[indice];
  avalia.textContent = avaliaCarrosel[indice];
  sinopse.textContent = sinopseCarrosel[indice];
  carrosel.style.backgroundImage = `url('${banerCarrosel[indice]}')`;
  trailerUrl = trailerCarrosel[indice]; 
}

btnDireita.addEventListener("click", () => {
  if (indice == 6) {
    indice = 0;
  } else {
    indice += 1;
  }
 addValores();
});
btnEsquerda.addEventListener("click", () => {
  if (indice == 0) {
    indice = 5;
  } else {
    indice -= 1;
  }
  addValores();
});
const meuIntervalo = setInterval(() => {
  if (indice == 6) {
    indice = 0;
  } else {
    indice += 1;
  }

  addValores();
}, 6000);

// codigo do trailer
const btnTrailer = document.getElementById('btn-trailer');
const modalVideo = document.querySelector('.modal-container');
const btnFechar = document.getElementById('btnFechar');
const iframeVideo = document.getElementById('iframeVideo');

btnTrailer.addEventListener('click', () => {
    iframeVideo.src = `${trailerUrl}&autoplay=1`;
    modalVideo.style.display = 'flex';
});

modalVideo.addEventListener('click', () => {
     modalVideo.style.display = 'none';
    iframeVideo.src = ""; 
});


// filtrar por genero

function mostrarCardsgenero(listaDeDados) {
  const container = document.querySelector(".container-cards-genero");
  container.innerHTML = "";
  if (listaDeDados.length === 0) {
    container.innerHTML = "Nenhum registro encontrado";
    return;
  }

 
    listaDeDados.forEach((item) => {
      container.appendChild(criarCard(item));
    });
  }


const campoFiltro = document.querySelector("#genero");
campoFiltro.addEventListener("change", (event) =>{
       const termoBuscado = event.target.value.toLowerCase();

   const dadosFiltrados = dadosOriginais.filter((item) => {
     return   item.genero.toLowerCase().includes(termoBuscado);
   });
   mostrarCardsgenero(dadosFiltrados);
});



// filtrar por titulo


function mostrarCardstitulo(listaDeDados) {
  const container = document.querySelector(".container-cards-titulo");
  container.innerHTML = "";
  if (listaDeDados.length === 0) {
    container.innerHTML = "Nenhum registro encontrado";
    return;
  }

 
    listaDeDados.forEach((item) => {
      container.appendChild(criarCard(item));
    });
  }


const campoFiltrotitulo = document.querySelector("#pesquisa");
campoFiltrotitulo.addEventListener("input", (event) =>{
       const termoBuscado = event.target.value.toLowerCase();

   const dadosFiltrados = dadosOriginais.filter((item) => {
     return   item.titulo.toLowerCase().includes(termoBuscado);
   });
     banner.style.display = "none";
  containerCardsFilmes.parentElement.style.display = "none";
  containerCards.parentElement.style.display = "none";
  containerCardsSeries.parentElement.style.display = "none";
   containerCardsGenero.parentElement.style.display = "none";
   containerCardsTitulo.parentElement.style.display = "block";
   mostrarCardstitulo(dadosFiltrados);
});
//   editar, deletar, arrumar o avalicao, visualisar informacoes de registro