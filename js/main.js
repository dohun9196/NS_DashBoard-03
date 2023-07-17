$(function () {
  //주소창에 index가 있을때
  if (window.location.href.indexOf("index") !== -1) {
    $(".Side_menu .drop_nav li.fr_load").addClass("nav_on");
  }

  // li 클릭 이벤트 (add,remove(.nav_on))
  // react 제작시 <NavLink></NavLink> 태그 사용
  $(".Side_menu .drop_nav li").on("click", function () {
    $(this)
      .addClass("nav_on")
      .siblings()
      .removeClass("nav_on")
      .closest(".Side_menu")
      .find(".list")
      .not($(this).closest(".list"))
      .find("li")
      .removeClass("nav_on");
  });

  // 다크모드 토글
  var check = $("input[type='checkbox']");
  check.click(function () {
    $("p").toggle();
    $("body").toggleClass("mod");
  });
});
