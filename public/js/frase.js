$('#botao-frase').click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria(){
    $('#spinner').toggle();
    $.get('http://localhost:3000/frases',trocaFrase)
    .fail(()=>{
        $('#erro').toggle();
        setTimeout(()=>{
            $('#erro').toggle(); 
        },2000);
    })
    .always(()=>{
        $('#spinner').toggle(); 
    })
};

function trocaFrase(data){
    let frase = $('.frase');
    let numRand = Math.floor(Math.random()*data.length);

    frase.text(data[numRand].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numRand].tempo);
}
function toggleFrase(data) {
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}

function buscaFrase(){
    $('#spinner').toggle();

    var fraseId = $('#frase-id').val();
    var dados = {id: fraseId};

    $.get('http://localhost:3000/frases', dados, toggleFrase)
    .fail(()=>{
        $('#erro').toggle();
        setTimeout(()=>{
            $('#erro').toggle(); 
        },2000);  
    })
    .always(()=>{
        $('#spinner').toggle();
    })
}