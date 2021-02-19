$('input[name="nenhum"]').change(function () {
    if ($('input[name="nenhum"]:checked').val() === "cotacao1") {
        $('.campo').show();
        $('.campo2, .campo3').hide();
    }
    if($('input[name="nenhum"]:checked').val() === "duvida1"){
        $('.campo2').show();
        $('.campo, .campo3').hide();
    } 
    if($('input[name="nenhum"]:checked').val() === "ocultar"){
        $('.campo3').show();
        $('.campo, .campo2').hide();
    } 
});


function addnovo(){

if($('.produto2').is(':visible') == false){
    $('.produto2').show();
}else if($('.produto3').is(':visible') == false){
    $('.produto3').show();
}else if($('.produto4').is(':visible') == false){
    $('.produto4').show();
}else if($('.produto5').is(':visible') == false){
    $('.produto5').show();
}else if($('.produto6').is(':visible') == false){
    $('.produto6').show();
}else if($('.produto7').is(':visible') == false){
    $('.produto7').show();
}else if($('.produto8').is(':visible') == false){
    $('.produto8').show();
}else if($('.produto9').is(':visible') == false){
    $('.produto9').show();
}else if($('.produto10').is(':visible') == false){
    $('.produto10').show();
}
}