

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
    /*
    Mudei as imagens.. estavam localizadas no background-image -> passei para o html 

    */

    $('section.social .mosaico-social').slick({
        centerMode:false,
        slidesToShow:9,
        arrows:false,
        infinite:true,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:6,
                    autoplay: true,
                    autoplaySpeed:2000
                }
            },
            {
                breakpoint:580,
                settings:{
                    arrows:false,
                    centerMode:false,
                    slidesToShow:4,
                    autoplay: true,
                    autoplaySpeed:2000
                }
            },{
                breakpoint:380,
                settings:{
                    arrows:false,
                    centerMode:false,
                    slidesToShow:2,
                    autoplay: true,
                    autoplaySpeed:2000
                }
            }

        ]

    });
    
})


/*
  tirar o ultimo slide feito a mao para colocar o slick
*/