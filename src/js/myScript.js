"use strict"


function result(){
    	type_site = document.getElementById('type_site').value;
    	type_design = document.getElementById('type_design').value;
    	type_adapt = document.getElementById('type_adapt').value;


 
        price = parseFloat(type_site) + parseFloat(type_design) + parseFloat(type_adapt);
        document.getElementById('price').innerHTML = "Стоимость равна: " + price + " р.";
}




$(document).ready(function(){



});


$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top + "px"});
});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});



var check = 1;
var target = $('.section');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;

$(window).scroll(function() {
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem && check) {
    $('.out-num').each(function() {
      $(this).prop('Counter', -1).animate({
        Counter: $(this).text()
      },{
        duration: 3000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
    check = 0;
  }
});

$(document).ready(function(){
  showStartModal();
});

function showStartModal(){
  setTimeout(function(){
    $('#exampleModal').modal('show');
    $('btn-accept').on('click', function(){

      $('#exampleModal').modal('hide');
    });
  }, 1000);
  
}

