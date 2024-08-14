$(function () {
  // scroll trigger
  $('header li a').click(function (e) {
    e.preventDefault();
    // content
    var target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top - 10,
      },
      400
    );
    // header nav
    if (target == '#proyectos') {
      setTimeout(function () {
        $('header').animate(
          {
            scrollLeft: 0,
          },
          200
        );
      }, 600);
    } else {
      $('header').animate(
        {
          scrollLeft: 188,
        },
        200
      );
    }
  });

  // current section
  var currentSection = '#proyectos'; // init

  function setCurrentSection(section) {
    if (section != currentSection) {
      currentSection = section;
      $('header li a').removeClass('on');
      $('header li a[href="' + currentSection + '"]').addClass('on');
      if (section == '#proyectos') {
        $('header').animate(
          {
            scrollLeft: 0,
          },
          200
        );
      } else {
        $('header').animate(
          {
            scrollLeft: 188,
          },
          200
        );
      }
    }
  }

  // scroll detect
  var offsetTopProyectos,
    offsetTopEquipo,
    offsetTopServicios,
    offsetTopContactanos; // init

  $(window).scroll(function () {
    offsetTopProyectos = $('#proyectos').offset().top;
    offsetTopEquipo = $('#equipo').offset().top;
    offsetTopServicios = $('#servicios').offset().top;
    offsetTopContactanos = $('#contactanos').offset().top;

    if (this.scrollY < offsetTopEquipo - 200) {
      setCurrentSection('#proyectos');
    } else if (this.scrollY < offsetTopServicios - 200) {
      setCurrentSection('#equipo');
    } else if (this.scrollY < offsetTopContactanos - 200) {
      setCurrentSection('#servicios');
    } else if (this.scrollY > offsetTopContactanos - 200) {
      setCurrentSection('#contactanos');
    }
  });
});
