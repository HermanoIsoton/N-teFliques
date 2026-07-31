const parametrosDaUrl = new URLSearchParams(window.location.search);

const campoID = document.getElementById("idAtualizar");

const campocapa = document.getElementById("capa");
const campotitulo = document.getElementById("titulo");
const campodata = document.getElementById("dataLancamento");
const campotipo = document.getElementById("tipo");
const campogenero = document.getElementById("genero");
const campoavaliacao = document.getElementById("avaliacao");
const campotrailer = document.getElementById("trailerc");
const camposinopse = document.getElementById("sinopse");

campoID.value = parametrosDaUrl.get("id");
campocapa.value = parametrosDaUrl.get("capa");
campotitulo.value = parametrosDaUrl.get("titulo");
campodata.value = parametrosDaUrl.get("dataLancamento");
campotipo.value = parametrosDaUrl.get("tipo");
campogenero.value = parametrosDaUrl.get("genero");
campoavaliacao.value = parametrosDaUrl.get("avaliacao");
campotrailer.value = parametrosDaUrl.get("trailer");
camposinopse.value = parametrosDaUrl.get("sinopse");

const btndeletar = document.getElementById("deletar");

btndeletar.addEventListener("click", () => {
    const usuarioConfirmou = confirm(`Tem certeza que deseja excluir o registro deste filme?`);
    if (usuarioConfirmou) {
        const campoIdDeletar = document.getElementById("campo-id");
        campoIdDeletar.value = parametrosDaUrl.get("id");  
    }
});

// trailer
const trailer = document.getElementById("trailer");
trailer.src = campotrailer.value;