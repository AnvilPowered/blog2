$(document).ready(function(){
  var banner = {
    padre: $('#banner'),
    numeroSlides: $('#banner').children('.slide').length,
    posicion: 1
  }
  var info = {
    padre: $('#info'),
    numeroSlides: $('#info').children('.slide').length,
    posicion: 1
  }

  banner.padre.children('.slide').first().css({
    'left': 0
  });

  info.padre.children('.slide').first().css({
    'left': 0
  });

  var altoBanner = function() {
    var alto = banner.padre.children('.slide').outerHeight();

    banner.padre.css({
      'height': alto + 'px'
    });
  }

  var altoInfo = function() {
    var alto = info.padre.children('.slide').outerHeight();

    info.padre.css({
      'height': alto + 'px'
    });
  }

  altoBanner();
  altoInfo();

  $(window).resize(function() {
    altoBanner();
  });

  /* ------------------------------------- */
  /* ----------  Banner */
  /* ------------------------------------- */

      //Siguiente
      $('#banner-next').on('click', function(e){
        e.preventDefault();

        if(banner.posicion < banner.numeroSlides) {
          //Slides empiecen a la derecha.
          banner.padre.children().not('.active').css({
              'left': '100%'
          });

          $('#banner .active').removeClass('active').next().addClass('active').animate({
            'left': 0
          });

          $('#banner .active').prev().animate({
            'left': '-100%'
          });

          banner.posicion = banner.posicion + 1;
        } else {
          $('#banner .active').animate({
            'left': '-100%'
          });
          banner.padre.children().not('active').css({
              'left': '100%'
          });
          $('#banner .active').removeClass('active');
          banner.padre.children('.slide').first().addClass('active').animate({
            'left': 0
          });
          banner.posicion = 1;
        }
      });


      //Atras
      $('#banner-prev').on('click', function(e){
        e.preventDefault();

        if(banner.posicion > 1) {
          banner.padre.children().not('.active').css({
              'left': '-100%'
          });

          $('#banner .active').animate({
            'left': '100%'
          })

          $('#banner .active').removeClass('active').prev().addClass('active').animate({
            'left': 0
          });

          banner.posicion = banner.posicion - 1;
        } else {
          banner.padre.children().not('.active').css({
              'left': '-100%'
          });
          $('#banner .active').animate({
            'left': '100%'
          });
          $('#banner .active').removeClass('active');
          banner.padre.children().last().addClass('active').animate({
            'left': 0
          });
          banner.posicion = banner.numeroSlides;
        }
      });

      $(document).ready(function(e){
          $('#profileImage').on('click', function(){
            $('#profileImage').load('../js/folio.html')
          });


      });










});
