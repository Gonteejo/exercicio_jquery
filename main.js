$(document).ready(function(){
    let vetor = [];
    $('header button').click(function() {
        $('#form-holder').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('#form-holder').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#input-text').val();
        const gut = $('#gravidade').val() * $('#urgencia').val() * $('#tendencia').val();
        vetor.push({tarefa: tarefa, gut: gut})
        vetor = vetor.sort((a,b) => {
            return b.gut - a.gut;
        })
        $('ol').empty();
        for (let i = 0; i < vetor.length; i++) {
            const novaTarefa = $('<li> </li>');
            $(`<p>${vetor[i].tarefa} - Criticidade: ${vetor[i].gut}</p>`).appendTo(novaTarefa);
            $(novaTarefa).appendTo('ol');
        }
    })

    $('ol').on("click","li",function() {
        $(this).css("text-decoration", "line-through");
    });
})
