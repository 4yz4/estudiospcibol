// INICIAMOS WOW
new WOW().init();

var scroll = new SmoothScroll('a[href*="#inventario-fallas"]', {
    speed: 1000,
    offset: 60,
});

var scroll = new SmoothScroll('a[href*="#encabezado"]', {
    speed: 500,
    offset: 60,
});

// OCULTAR Y MOSTRAR BOTON IR ARRIBA
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });
});