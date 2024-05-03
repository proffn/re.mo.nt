$(function(){

    /* ------------------------------project------------------------ */
    let filter = $("[data-filter]");
    filter.on ("click", function(){
        let cat = $(this).data('filter');
        if (cat == 'all'){
            $('[data-cat]').removeClass('project__hide')
        }else{
            $("[data-cat]").each(function(){
                let workCat = $(this).data('cat');
                if (workCat != cat){
                    $(this).addClass('project__hide');
                }else{
                    $(this).removeClass('project__hide');
                }
            });
        }
        
    });

    $('.project__menu-item').on('click', function (){
        $('.project__menu-item').removeClass('project__menu-item--active');
        $(this).addClass('project__menu-item--active');
    });

    
    const projectSwiper = new Swiper(".project__swiper", {
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
    });
    
    /* ------------------------------comment------------------------ */
    const commentSwiper = new Swiper('.comment__swiper', {
        loop: true,     
        slidesPerView: 2,                   
        centeredSlides : true,              
        spaceBetween: 70,                   
        pagination: {                       
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {                       
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    function setSlidesPerView() {
        commentSwiper.params.slidesPerView = window.innerWidth < 1000 ? 1 : 2;
        commentSwiper.update();
    }
    window.addEventListener('resize', setSlidesPerView);
    setSlidesPerView();
    
    /* ------------------------------question------------------------ */
    
    $('.question__acc-link').on('click', function(e){
        e.preventDefault()
        if($(this).hasClass('question__acc-link--active')){
            $(this).removeClass('question__acc-link--active')
            $(this).children('.question__acc-text').slideUp()
        } else {
            $('.question__acc-link').removeClass('question__acc-link--active')
            $('.question__acc-text').slideUp()
            $(this).addClass('question__acc-link--active')
            $(this).children('.question__acc-text').slideDown()
        }
    });

    /* ------------------------------scroll------------------------ */
    $('.header__nav-list a, .header-btn-box a, .rapair__btn, .project__btn-button, .question__btn-button,.footer__nav-list a, .footer__logo').on('click', function(e){
        e.preventDefault()
        var id = $(this).attr('href'),
        top = $(id).offset().top
        $('body,html').animate({scrollTop:top},1000);
    })

    /* ------------------------------burger------------------------ */

    setInterval(()=>{
        if ($(window).scrollTop()>0 && $('.header__top').hasClass('header__top-open')===false){
            $('.burger').addClass('burger-follow')
        }else{
            $('.burger').removeClass('burger-follow')
        }
    }, 0);
    $('.burger , .overlay').on('click', function(e){
        e.preventDefault()
        $('.header__top').toggleClass('header__top-open')
        $('.overlay').toggleClass('overlay-show')
    })

    /* ------------------------------calc------------------------ */

    var modal = document.getElementById("calc__modal");
    var btn = document.getElementById("calc__modal-title");
    var span = document.getElementsByClassName("calc__madal-close")[0];

    btn.onclick = function() {
    modal.style.display = "block";
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }



    $("#calc__form-text").mask("+7 (999) 999-99-99"); 
});

