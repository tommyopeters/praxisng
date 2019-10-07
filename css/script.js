var ww = document.body.clientWidth;

$(document).ready(function() {
  $(".naved li a").each(function() {
    if ($(this).next().length > 0) {
      $(this).addClass("parent");
    }
  });

  $(".toggleMenu").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".naved").toggle();
  });
  adjustMenu();
});

$(window).bind("resize orientationchange", function() {
  ww = document.body.clientWidth;
  adjustMenu();
});

var adjustMenu = function() {
  if (ww < 768) {
    $(".toggleMenu").css("display", "inline-block");
    if (!$(".toggleMenu").hasClass("active")) {
      $(".naved").hide();
    } else {
      $(".naved").show();
    }
    $(".naved li").unbind("mouseenter mouseleave");
    $(".naved li a.parent")
      .unbind("click")
      .bind("click", function(e) {
        // must be attached to anchor element to prevent bubbling
        e.preventDefault();
        $(this)
          .parent("li")
          .toggleClass("hover");
      });
  } else if (ww >= 768) {
    $(".toggleMenu").css("display", "none");
    $(".naved").show();
    $(".naved li").removeClass("hover");
    $(".naved li a").unbind("click");
    $(".naved li")
      .unbind("mouseenter mouseleave")
      .bind("mouseenter mouseleave", function() {
        // must be attached to li so that mouseleave is not triggered when hover over submenu
        $(this).toggleClass("hover");
      });
  }
};
