$(function () {
  var button = $(".dot");

  function switchToNext() {
    var _this = $(this);

    if (_this.hasClass("active")) {
      return false;
    } else {
      $(".dot.active").removeClass("active");
      _this.addClass("active");
    }
  }

  button.on("click", switchToNext);
});
