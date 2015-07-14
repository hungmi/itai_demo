// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

var randomEffect = function(id, effect1, effect2) {
  a = Math.random();
  //console.log(id + ':' + a);
  if( a > 0.5) {
    $('#' + id).removeClass(effect2);
    $('#' + id).addClass(effect1);
  } else {
    $('#' + id).removeClass(effect1);
    $('#' + id).addClass(effect2);
  };
}

$(function(){
  console.log('gogogo');
  for (var i = 1; i < 8; i++) {
    $('#carousel_' + i).on('slide.bs.carousel', function () {
      randomEffect($(this).attr("id"), 'slide', 'slide carousel-fade');
    })
  };  

  $('#carousel_1').carousel({
    interval: 6000    
  });
  $('#carousel_2').carousel({
    interval: 3000
  });
  $('#carousel_3').carousel({
    interval: 14000
  });
  $('#carousel_4').carousel({
    interval: 11000
  });
  $('#carousel_5').carousel({
    interval: 9000
  });
  $('#carousel_6').carousel({
    interval: 12000
  });
  $('#carousel_7').carousel({
    interval: 8000
  });

  //$('#product_showcase_main_grid').img
});


