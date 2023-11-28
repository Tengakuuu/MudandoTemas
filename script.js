$('#tema1').click(function(e) {
    $("body").removeClass();
    $("body").toggleClass("tema1");
    indexAtual = 2;
    $("#logo").attr("src", imagens[indexAtual]);
    
});
$('#tema2').click(function(e) {
    $("body").removeClass();
    $("body").toggleClass("tema2");
    indexAtual = 1;
    $("#logo").attr("src", imagens[indexAtual]);
});
$('#tema3').click(function(e) {
    $("body").removeClass();
    $("body").toggleClass("tema3");
    indexAtual = 0;
    $("#logo").attr("src", imagens[indexAtual]);
});
$('#reset').click(function(e) {
    $("body").removeClass();
    $("#logo").attr("src", '');
});

//trocar img
$('#logo').fadeIn();
var indexAtual =  undefined;
var imagens = ['logos/dbzlogo.png','logos/Jjklogo.png','logos/kimetsulogo.png'] 

 