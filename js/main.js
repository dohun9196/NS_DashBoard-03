$(function () {
  //주소창에 index가 있을때
  if (window.location.href.indexOf("index") !== -1) {
    $(".Side_menu .drop_nav li.fr_load").addClass("nav_on");
  }

  $(".Header .gnb ._menu .nav_list .nav_tit").on("click", function () {
    // 현재 클릭된 .nav_tit 요소와 그 부모 .nav_list 요소에 nav_on 클래스 추가
    $(this).toggleClass("nav_on").parent().toggleClass("nav_on");

    // 다른 .nav_list 요소와 그 자식 .nav_tit 요소의 nav_on 클래스 제거
    $(this)
      .parent()
      .siblings()
      .removeClass("nav_on")
      .find(".nav_tit")
      .removeClass("nav_on");
  });

  $(".Header .gnb ._menu .nav_list .drop_down>li").on("click", function () {
    // 클릭한 요소에 nav_on 클래스 추가
    $(this).addClass("nav_on");

    // 해당 요소의 형제 요소들에서 nav_on 클래스 제거
    $(this).siblings().removeClass("nav_on");

    // 다른 .nav_list 요소에 있는 .drop_down>li.nav_on 클래스 제거
    $(".Header .gnb ._menu .nav_list .drop_down>li.nav_on")
      .not(this)
      .removeClass("nav_on");
  });
});
