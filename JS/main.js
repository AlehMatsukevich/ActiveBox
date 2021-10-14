
$(()=>{
    //данная конструкция позволяет сначала все прогрущить а потом использовать JS
    // FIXED HEADER
    let header = $('#header'),
        intro = $('#intro'),
        introH = intro.innerHeight(), 
        scrollPos = $(window).scrollTop(),
        nav = $('#nav'),
        navToggle =$('#navToggle');
    
    $(window).on('scroll load resize', () =>{
        scrollPos =$(this).scrollTop(); // присваеваем скролПоз текущий скрол
        introH = intro.innerHeight(); //высота элемента включая паддинги
        if(scrollPos > introH){    
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });

    // SMOTH SCROLL
    $("[data-scroll]").on('click', function(event){
        event.preventDefault();
        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top; //отсутп каждого элемента блок ID от верха
       nav.removeClass('show');
        $("html, body").animate({
           scrollTop: blockOffset - 70
        }, 500);
    });


    // NavToggle
    navToggle.on('click', function(event){
        event.preventDefault();

        nav.toggleClass('show');
    });

    //reviews
    let slider =$('#reviewsSlider');
    
    slider.slick({
        infinite: true, //бесконечный скрол
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,        //затемняет отзывы
        arrows: false,    //убираем кнопки
        dots: true 
      });
    
    
    
});