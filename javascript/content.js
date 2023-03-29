// РАЗМЫТИЕ ФИГУР
$(document).ready(function(){
  $("section").mousemove(function(event) {
    let duo = $(".duo");
    let x = (duo.offset().left) + (duo.width() / 2);
    let y = (duo.offset().top) + (duo.height() / 2);
    let z = Math.sqrt(Math.pow(Math.abs(event.pageY - y), 2) + Math.pow(Math.abs(event.pageX - x), 2));
    $(".duo").css({
      "filter": "blur(" + z / 35 + "px)"
    });
  });
});
$(document).ready(function(){
  $("section").mousemove(function(event) {
    let star = $(".star");
    let x = (star.offset().left) + (star.width() / 2);
    let y = (star.offset().top) + (star.height() / 2);
    let z = Math.sqrt(Math.pow(Math.abs(event.pageY - y), 2) + Math.pow(Math.abs(event.pageX - x), 2));
    $(".star").css({
      "filter": "blur(" + z / 35 + "px)"
    });
  });
});
$(document).ready(function(){
  $("section").mousemove(function(event) {
    let row = $(".row");
    let x = (row.offset().left) + (row.width() / 2);
    let y = (row.offset().top) + (row.height() / 2);
    let z = Math.sqrt(Math.pow(Math.abs(event.pageY - y), 2) + Math.pow(Math.abs(event.pageX - x), 2));
    $(".row").css({
      "filter": "blur(" + z / 30 + "px)"
    });
  });
});
$(document).ready(function(){
  $("section").mousemove(function(event) {
    let cloud = $(".cloud");
    let x = (cloud.offset().left) + (cloud.width() / 2);
    let y = (cloud.offset().top) + (cloud.height() / 2);
    let z = Math.sqrt(Math.pow(Math.abs(event.pageY - y), 2) + Math.pow(Math.abs(event.pageX - x), 2));
    $(".cloud").css({
      "filter": "blur(" + z / 35 + "px)"
    });
  });
});
$(document).ready(function(){
  $("section").mousemove(function(event) {
    let hex = $(".hex");
    let x = (hex.offset().left) + (hex.width() / 2);
    let y = (hex.offset().top) + (hex.height() / 2);
    let z = Math.sqrt(Math.pow(Math.abs(event.pageY - y), 2) + Math.pow(Math.abs(event.pageX - x), 2));
    $(".hex").css({
      "filter": "blur(" + z / 35 + "px)"
    });
  });
});

// ИСЧЕЗНОВЕНИЕ ЭКРАНА
$(document).ready(function(){
  $(".shp").click(function(){
    $(".mainscreen").css("opacity", "0");
    setTimeout(function() {
      $(".mainscreen").css("display","none");
    }, 1000);
    $(".cursorchik").css("display","none");
  });
});

// ЛЮБОВЬ
$(function(){
  $(".duo").click(function(){
    $(".love").css("opacity", "100%");
  });
});
$(function(){
  $(".circle").draggable();
});
$(function(){
  $(".love_return").click(function(){
    $(".love").css("opacity", "0");
    $(".mainscreen").css("display", "block");
    setTimeout(function() {
      $(".mainscreen").css("opacity","100%");
      $(".cursorchik").css("display","block");
    }, 200);
  });
});
