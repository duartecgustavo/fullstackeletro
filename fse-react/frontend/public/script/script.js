// FUNÇÕES PAGINA PRODUTOS

// FUNÇÃO PARA FILTRAR POR CATEGORIA

function exibirCategoria(categoria) {
    let elementos = document.getElementsByClassName("prod");
    // console.log(elementos[i].id)

    for (let i = 0; i < elementos.length; i++) {

        if (categoria == elementos[i].id) {
            elementos[i].style = "display: inline-block; background-color: white; box-shadow: 3px 3px 3px black;"
        } else {
            elementos[i].style = "display: none"
        }

    }
}


function showCategories(categoria) {

    let prod = document.getElementsByClassName('box-item');
    for (let i = 0; i < prod.length; i++) {
        if (categoria == prod[i].id) {
            prod[i].style.display = "none";
        } else {
            prod[i].style.display = "none";
        }
    }
}


// FUNÇÃO PARA EXIBIR TODOS OS PRODUTOS

function exibirTodos(categoria) {
 
    let elementos = document.getElementsByClassName("prod");
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style = "display: inline-block; background-color: white; box-shadow: 3px 3px 3px black;"
    }
}

// FUNÇÃO PARA AUMENTAR A FOTO AO CLICAR

function aumentar(produto) {
    // let divproduto = document.getElementById("fogaoconsul")
    if (produto.width == 320) {
        produto.style = "width: 220px; height: 170px; padding-top: 0px; box-shadow: none; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
    } else {
        produto.style = "width: 320px; height: 250px; box-shadow: 1px 2px 10px #504545; align-content: top; -webkit-transition: linear  0.2s; -moz-transition: linear 0.2s;"
        // divproduto.style = "padding-top: 90px; border: 2px black solid;"
    }
}