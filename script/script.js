function pesquisar(){
    let entrada,filtro,jogos,jogosItens,links,x,y;

    entrada = document.getElementById("pesquisa");
    filtro = entrada.value.toUpperCase();
    jogos = document.getElementById("jogos");
    jogosItens = jogos.getElementsByTagName("li");

    x = document.getElementById("nao-achado");
    y = 0;

    if(filtro != ""){
        for(let i=0; i < jogosItens.length;i++){
            links = jogosItens[i].getElementsByTagName("a")[0];

            if(links.innerHTML.toUpperCase().indexOf(filtro) > -1){
                jogos.style.display="block";
                jogosItens[i].style.display="block"; /*mostra o elemento*/
                y++;
            }
            else{
                jogosItens[i].style.display="none";
            }
        }
        if(y >= 1){
            x.style.display="none";
        }
        else{
            x.style.display="block";
        }
    }
}
function limpar(){
    var a = document.getElementById("pesquisa");
    a.value='';

    var b = document.getElementById("nao-achado");
    b.style.display="none";

    var c = document.getElementById("jogos");

    c.style.display="none";

    a.focus();
}