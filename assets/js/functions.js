$(function () {

  smoothScroll(300);
  previousPosition();
  clientStuff();

  $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
  $(".biglink").fitText(1.5);

  $("textarea").autosize();

});

function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function (event) {

    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }

  });
}

function previousPosition() {
  $(".jumper").on("click", function (e) {

    e.preventDefault();

    $("html, body").animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 600);

  });
}
