let dadosOriginais = [];

carregardados();

async function carregardados() {
    const resposta = await fetch("Back/listar.php");

    console.log(resposta);

    dadosOriginais = await resposta.json();

    mostrarCards(dadosOriginais);
    
}
  const containerCards = document.querySelector(".container-cards");
  const containerCardsFilmes = document.querySelector(".container-cards-filmes");
  const containerCardsSeries = document.querySelector(".container-cards-series");
  const containerCardsGenero = document.querySelector(".container-cards-genero");
  

 function mostrarCards(listaDeDados){
    const container = document.querySelector(".container-cards");
    container.innerHTML = "";

    if(listaDeDados.length === 0){
        container.innerHTML = "Nenhum registro encontrado";
        return;
    }



        function criarCard(item){
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

        listaDeDados.forEach((item) =>{
        containerCards.appendChild(criarCard(item));
        
         if (item.tipo == "filme" ) {
                containerCardsFilmes.appendChild(criarCard(item));
            } else if (item.tipo == "serie" ) {
             containerCardsSeries.appendChild(criarCard(item));
               }
               
            });
        }

        const btnfilme = document.getElementById("fonte-filmes");
        const btnserie = document.getElementById("fonte-series");
        const btninicio = document.getElementById("fonte-tudo");
        const btngeneros = document.getElementById("fonte-generos");
        

        btnserie.addEventListener("click", () =>{
             containerCardsSeries.parentElement.style.display = "block";
           containerCards.parentElement.style.display = "none";
           containerCardsFilmes.parentElement.style.display = "none";
         
        });
        btnfilme.addEventListener("click", () =>{
              containerCardsFilmes.parentElement.style.display = "block";
           containerCards.parentElement.style.display = "none";
           containerCardsSeries.parentElement.style.display = "none";
        });
         btninicio.addEventListener("click", () =>{
              containerCardsFilmes.parentElement.style.display = "block";
           containerCards.parentElement.style.display = "block";
           containerCardsSeries.parentElement.style.display = "block";
        });
         btngeneros.addEventListener("click", () =>{
              containerCardsGenero.parentElement.style.display = "block";
              containerCardsFilmes.parentElement.style.display = "none";
           containerCards.parentElement.style.display = "none";
           containerCardsSeries.parentElement.style.display = "none";
        });


        // validação de dados, baner funcional, filtrar por tipo, filtrar por titulo, editar, deletar