// ПЛАГИНЫ: JQUERY + spincrement

$(document).ready(function () {
  // ЭЛЕМЕНТ В КОТОРОМ НАХОДИТСЯ БЛОК С ЦИФРАМИ ДЛЯ ПЛАВНОГО ПОЯВЛЕНИЯ
  $(window).on("scroll load resize", function () {
    // БЛОК С ЦИФРАМИ
    screenPoint(".numbers__wrap_block", 100, true, function () {
      $(".numbers__wrap_numeric").spincrement({
        from: 0,
        to: null,
        thousandSeparator: " ",
        duration: 5000,
        leeway: 50,
        fade: true,
      });
    });
  });

  let show = true;

  function screenPoint(elem, offseteder, infiniter, callback) {
    let infinit = infiniter;
    let countbox = elem;
    let offseted = offseteder;
    let func = callback || function () {};
    let w_top = $(window).scrollTop();
    let w_height = $(window).height();
    let e_top = $(countbox).offset().top;
    let e_height = $(countbox).outerHeight();

    if (infinit) {
      if (
        (w_top + w_height < e_top && show == false) ||
        (w_top > e_top + e_height && show == false)
      ) {
        show = true;
      }
    }

    if (!show) return false;

    if (
      w_top + w_height - offseted >= e_top &&
      w_top + offseted < e_top + e_height
    ) {
      func();
      show = false;
    }
  }
});
