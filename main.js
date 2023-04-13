$(document).ready(function(){
    /* console.log(document.querySelector('header button'));
    console.log($('header button'));

    document.querySelector('header button').addEventListener('click', function(e){

    }) Adicionar utilizando JavaScript */

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })
    
    $('header button').click(function(){
        $('form').slideDown();
    }) //Adicionar utilizando JQuery

    $('form').on('submit', function(e){
        e.preventDefault(); //Remover o comportamento do formulário de quando submetido atualizar a página
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //No JS é utilizado .value
        const novoItem = $('<li style="display: none" ></li>');
        $(`<img src= "${enderecoDaNovaImagem}"/>`).appendTo(novoItem);// o appendTo pega o elemento:  $(`<img src= "${enderecoDaNovaImagem}"/>`). E insere entre as tags <li></li>
        $(
            `<div class= "overlay-imagem-link"
                <a href = "${enderecoDaNovaImagem}" target_"blank" title = "ver imagem em tamanho real"
                "ver imagem em tamanho real"
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    }) 

})