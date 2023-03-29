$(document).ready(function(){
  $(document).mousemove(function(event){
    $(".cursor").css({
      left: event.pageX,
      top: event.pageY,
    })
    setTimeout(function(){
      $(".cursorchik").css({
        left: event.pageX,
        top: event.pageY,
      });
    }, 20);
  });
});

$(document).ready(function(){
  $(".shp").hover(function(event){
    $(".cursorchik").toggleClass("cursorchikClick");
  });
});
