
/*
$(document).ready(function () {
    alert('Deu certo');
});

$(window).on('load', function () {
    alert("Carregou!!");
});*/
$(document).ready(function () {



    $(".menu-mobile ").click(function () {
        console.log("cliclou no menu");
        $("nav.menu-mobile > ul").toggle();


    });

    /*
        $(".social").hover(function () {
    
            do {
                for (var i = 1; i < 10; i++) {
                    var j = i + 1;
                    //var objI = $('.img-mosaico-single-social:nth-child(' + i + ')').css("background-color");
                    var objI = $('.img-mosaico-single-social:nth-child(' + i + ')');
                    var objJ = $('.img-mosaico-single-social:nth-child(' + j + ')').css("background-color");
                    var obj1r = $('.img-mosaico-single-social:nth-child(1)').css("background-color");
                    //console.log(obj1);
                    //$(objI).css("background-color", objJ);
    
                    if (i == 9) {
                        $(objI).css("background-color", obj1r);
                    } else {
                        $(objI).css("background-color", objJ);
                    }
    
    
                }
            }while (i <10);
        });
    */




});

setInterval(slides, 2500);
function slides() {


    for (var i = 1; i < 10; i++) {
        var j = i + 1;
        //var objI = $('.img-mosaico-single-social:nth-child(' + i + ')').css("background-color");
        var obj1r = $('.img-mosaico-single-social:nth-child(1)').css("background");//tem que salvar o backgound antes de mandar 
        var objI = $('.img-mosaico-single-social:nth-child(' + i + ')');
        var objJ = $('.img-mosaico-single-social:nth-child(' + j + ')').css("background");
        
        //$(objI).css("background-color", objJ);

        if (i == 9) {
           
        //console.log(obj1);
            $(objI).css("background", obj1r);
        } else {
            $(objI).css("background", objJ);
        }


    }
}
