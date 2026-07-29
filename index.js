let dadosOriginais = [];

carregardados();

async function carregardados() {
  const resposta = await fetch("Back/listar.php");

  console.log(resposta);

  dadosOriginais = await resposta.json();

  mostrarCards(dadosOriginais);
   baner(dadosOriginais);
}
const containerCards = document.querySelector(".container-cards");
const containerCardsFilmes = document.querySelector(".container-cards-filmes");
const containerCardsSeries = document.querySelector(".container-cards-series");


function mostrarCards(listaDeDados, listaDeDadosFiltrados = []) {
  const container = document.querySelector(".container-cards");
  container.innerHTML = "";
 containerCardsGenero.innerHTML = "";
  if (listaDeDados.length === 0) {
    container.innerHTML = "Nenhum registro encontrado";
    return;
  }

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
    avaliacao.className = "avaliacao";
    avaliacao.textContent = item.avaliacao;

    card.appendChild(titulo);
    card.appendChild(tipo);
    card.appendChild(avaliacao);
    return card;
  }
  
     if (listaDeDadosFiltrados.length > 0) {
    listaDeDadosFiltrados.forEach((item) => {
      containerCardsGenero.appendChild(criarCard(item));
    });
  }


   if (listaDeDados.length > 0) {
    listaDeDados.forEach((item) => {
      containerCards.appendChild(criarCard(item));
       
      if (item.tipo == "filme") {
        containerCardsFilmes.appendChild(criarCard(item));
      } else if (item.tipo == "serie") {
        containerCardsSeries.appendChild(criarCard(item));
      }
    });
  }
}



const btnfilme = document.getElementById("fonte-filmes");
const btnserie = document.getElementById("fonte-series");
const btninicio = document.getElementById("fonte-tudo");
const btngeneros = document.getElementById("fonte-generos");

btnserie.addEventListener("click", () => {
  containerCardsSeries.parentElement.style.display = "block";
  containerCards.parentElement.style.display = "none";
  containerCardsFilmes.parentElement.style.display = "none";
});
btnfilme.addEventListener("click", () => {
  containerCardsFilmes.parentElement.style.display = "block";
  containerCards.parentElement.style.display = "none";
  containerCardsSeries.parentElement.style.display = "none";
});
btninicio.addEventListener("click", () => {
  containerCardsFilmes.parentElement.style.display = "block";
  containerCards.parentElement.style.display = "block";
  containerCardsSeries.parentElement.style.display = "block";
});
btngeneros.addEventListener("click", () => {
  containerCardsGenero.parentElement.style.display = "block";
  containerCardsFilmes.parentElement.style.display = "none";
  containerCards.parentElement.style.display = "none";
  containerCardsSeries.parentElement.style.display = "none";
});

const btnEsquerda = document.getElementById("btn-esquerda");
const btnDireita = document.getElementById("btn-direita");
const carrosel = document.querySelector(".carrosel");
const titulo = document.querySelector(".titulo");

let indice = 0;

const banerCarrosel = [];
const tituloCarrosel = [];
const dataCarrosel = [];
const categoriaCarrosel = [];
const tipoCarrosel = [];
const avaliaCarrosel = [];
const sinopseCarrosel = [];
const informacoes = document.querySelector(".informacoes");

function baner(listaDeDados){
listaDeDados.forEach((item) => {
  banerCarrosel.push(item.capa);
  tituloCarrosel.push(item.titulo);
  dataCarrosel.push(item.data_de_lançamento.substring(0, 4));
  categoriaCarrosel.push(item.genero);
  tipoCarrosel.push(item.tipo);
  avaliaCarrosel.push(item.avaliacao);
  sinopseCarrosel.push(item.sinopse);
});
}
const data = document.getElementById("data");
const categoria = document.getElementById("categoria");
const tipo = document.getElementById("tipo");
const avalia = document.getElementById("avalia");
const sinopse = document.getElementById("sinopse");

btnDireita.addEventListener("click", () => {
  if (indice == 6) {
    indice = 0;
  } else {
    indice += 1;
  }
  titulo.textContent = tituloCarrosel[indice];
  data.textContent = dataCarrosel[indice];
  categoria.textContent = categoriaCarrosel[indice];
  tipo.textContent = tipoCarrosel[indice];
  avalia.textContent = avaliaCarrosel[indice];
  sinopse.textContent = sinopseCarrosel[indice];
  carrosel.style.backgroundImage = `url('${banerCarrosel[indice]}')`;
});
btnEsquerda.addEventListener("click", () => {
  if (indice == 0) {
    indice = 5;
  } else {
    indice -= 1;
  }
  titulo.textContent = tituloCarrosel[indice];
  data.textContent = dataCarrosel[indice];
  categoria.textContent = categoriaCarrosel[indice];
  tipo.textContent = tipoCarrosel[indice];
  avalia.textContent = avaliaCarrosel[indice];
  sinopse.textContent = sinopseCarrosel[indice];
  carrosel.style.backgroundImage = `url('${banerCarrosel[indice]}')`;
});
const meuIntervalo = setInterval(() => {
  if (indice == 6) {
    indice = 0;
  } else {
    indice += 1;
  }

   titulo.textContent = tituloCarrosel[indice];
  data.textContent = dataCarrosel[indice];
  categoria.textContent = categoriaCarrosel[indice];
  tipo.textContent = tipoCarrosel[indice];
  avalia.textContent = avaliaCarrosel[indice];
  sinopse.textContent = sinopseCarrosel[indice];
  carrosel.style.backgroundImage = `url('${banerCarrosel[indice]}')`;
}, 4000);


const containerCardsGenero = document.querySelector(".container-cards-genero");
const campoFiltro = document.querySelector("#genero");
campoFiltro.addEventListener("change", (event) =>{
       const termoBuscado = event.target.value.toLowerCase();

   const dadosFiltrados = dadosOriginais.filter((item) => {
     return   item.genero.toLowerCase().includes(termoBuscado);
   });
   mostrarCards([], dadosFiltrados);
});

//   filtrar por titulo, editar, deletar
