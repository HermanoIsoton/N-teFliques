const btnEsquerda = document.getElementById("btn-esquerda");
const btnDireita = document.getElementById("btn-direita");
const carrosel = document.querySelector(".carrosel");
const titulo = document.querySelector(".titulo");
let indice = 0;
const banerCarrosel = ["https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2022/12/14124955/maxresdefault-27.jpg?fit=1280%2C720&ssl=1", "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a01393ab-13bb-415b-a830-4188ec50fb31/compose?aspectRatio=1.78&format=webp&width=1200", "https://m.media-amazon.com/images/S/pv-target-images/7de9bdaf287c0579ea16a70a62259ef00415feb09d1b59f49436f3b1571d3763.jpg", "https://rollingstone.com.br/wp-content/uploads/2025/11/O-comeco-do-fim-de-Stranger-Things-um-dos-maiores-sucessos-da-historia-da-Netflix.jpg", "https://cloud.estacaonerd.com/wp-content/uploads/2018/08/14153652/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg", "https://cloud.estacaonerd.com/wp-content/uploads/2019/05/15093546/breaking-bad-capa.jpg", "https://i.ytimg.com/vi/Oqfh0dKHhT4/maxresdefault.jpg" ];
const tituloCarrosel = ["Oppen Heimer", "Vingadores ultimato", "Coringa", "Stranger Thinks", "Jhon Wick", "Breacking Bad", "La casa de papel" ]
btnDireita.addEventListener("click", () =>{
    if(indice == 6){
        indice = 0;
    }
    else{
        indice += 1;
    } 
        titulo.textContent =  tituloCarrosel  [indice];
        carrosel.style.backgroundImage = `url('${banerCarrosel[indice]}')`;
});
btnEsquerda.addEventListener("click", () =>{
   if(indice == 0){
        indice = 5;
    }
    else{
        indice -= 1;
    }
    titulo.textContent =  tituloCarrosel [indice];
     carrosel.style.backgroundImage = `url('${banerCarrosel[indice]}')`;

});