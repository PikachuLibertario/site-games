function pesquisar(){
    let entrada,filtro,jogos,jogosItens,links;

    entrada = document.getElementById("pesquisa");
    filtro = entrada.value.toUpperCase();
    jogos = document.getElementById("jogos");
    jogosItens = jogos.getElementsByTagName("li");

    for(let i=0; i < jogosItens.length;i++){
        links = jogosItens[i].getElementsByTagName("a")[0];

        if(links.innerHTML.toUpperCase().indexOf(filtro) > -1){
            jogosItens[i].style.display="block"; /*mostra o elemento*/
        }
        else{
            jogosItens[i].style.display="none";
        }
    }
}