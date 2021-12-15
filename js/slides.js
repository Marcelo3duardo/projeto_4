

$(function () {


    // slides superior dando erro 
    
        $('.mosaico .mosaico--wraper ').slick({
            centerMode:false,
            slidesToShow:6,
            infinite:true,
            arrows:false,
            responsive:[
                {
                    breakpoint:768,
                    settings:{
                        arrows:false,
                        centerMode:true,
                        slidesToShow:3
                    }
                },
                {
                    breakpoint:580,
                    settings:{
                        arrows:false,
                        centerMode:true,
                        slidesToShow:2
                    }
                }, 
                {
                    breakpoint:380,
                    settings:{
                        arrows:false,
                        centerMode:true,
                        slidesToShow:1
                    }
                }

            ]
        });
    
        
    $('section.tratamentos .container-tartamento').slick({
        centerMode:false,
        slidesToShow:3,
        arrows:false,
        infinite:true,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:2
                }
            },
            {
                breakpoint:580,
                settings:{
                    arrows:false,
                    centerMode:false,
                    slidesToShow:1
                }
            },{
                breakpoint:380,
                settings:{
                    arrows:false,
                    centerMode:false,
                    slidesToShow:1
                }
            }

        ]

    });
    
})


/*
   toda vez que aplica o slide ele fica de canto
   provavelmente eh o flex direction do prorpio fremework!
   ** Adicionei um container mas pode ser retirado pois n faz diferenca 
   porem vale a pena tentar um display block nele;
*/