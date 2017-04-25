// setTimeout(function() {
//   $(".page").css("top", "200px")
//   $(".page").css("left", "300px")
// }, 2000);

// setTimeout(function() {
//   $(".page").css("top", "-100px")
//   $(".page").css("left", "100px")
// }, 5000);

var $draggable = $('.page').draggabilly({
  handle: '.page-drag-overlay'
});

var clicking = false;


// $draggable.on('staticClick', function( event, pointer ) {
//   console.log("just a click");
  
//   $(".page").css("pointer-events", "auto");
//   $(".page-drag-overlay").css("pointer-events", "none");
//   var el = document.elementFromPoint(pointer.pageX, pointer.pageY);
//   console.log(el);
//   var e = new jQuery.Event("click");
//   e.pageX = pointer.pageX;
//   e.pageY = pointer.pageY;
//   $(el).trigger(e);
//   $(".page").css("pointer-events", "none");
//   $(".page-drag-overlay").css("pointer-events", "auto");
  
// });

var timer = undefined;

$(".clickable").click(function(a, e) {
  console.log("here");
  console.log(a);
  a.preventDefault();

  // clearTimeout(timer);
  // $draggable.draggabilly('disable');
  // $(".page").addClass("is-centering");
  // timer = setTimeout(function() {
  //   $(".page.is-centering").removeClass("is-centering");
  //   $draggable.draggabilly('enable');
  // }, 1000);

  var pos = $(this).position();
  var w = $(window).width();
  var h = $(window).height();
  
  console.log(pos);
  $(".page").css("left", (w/2)-pos.left-$(this).width()/2+"px");
  $(".page").css("top", (h/2)-pos.top-$(this).height()/2+"px");
  $(".clickable").css("z-index", "0");
  $(this).css("z-index", "1");
  
});

function hide_nav() {
  $(".nav").removeClass("expanded");
  $(".hamburger").removeClass("is-active");
}

$(".hamburger").click(function() {
  if ($(".nav").hasClass("expanded")) {
    hide_nav();
  } else {
    $(".nav").addClass("expanded");
    $(this).addClass("is-active");
  }
});

$(".nav-link--declaration").click(function() {
  $(".text-page-container.is-open").removeClass("is-open");
  hide_nav();
  $(".text-page-container--declaration").addClass("is-open");
});

$(".nav-link--spring-17").click(function() {
  $(".text-page-container.is-open").removeClass("is-open");
  hide_nav();
  // $(".text-page-container--declaration").addClass("is-open");
});

$(".nav-link--about").click(function() {
  $(".text-page-container.is-open").removeClass("is-open");
  hide_nav();
  $(".text-page-container--about").addClass("is-open");
});

$(".image").one("load", function() {
  $(this).addClass("loaded");
}).each(function() {
  console.log(this.complete);
  if(this.complete) $(this).addClass("loaded"); // $(this).load();
});