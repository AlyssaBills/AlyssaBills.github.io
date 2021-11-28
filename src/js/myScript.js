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
	$('html, body').animate({scrollTop: $(valHref).offset().top -73 + "px"});
});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});



$(document).ready(function(){
  showStartModal();
});

function showStartModal(){
  setTimeout(function(){
    $('#exampleModal1').modal('show');
  
  }, 7000);
  
}

$(document).ready(function(){

});

$("#inputTel").mask("+7(999) 999-9999");

$('form').submit(function(event){

  if ($("#inputTel").val() == "" || $("#inputEmail1").val() == ""){
    event.preventDefault()
    alert("Введите телефон/Email");
  }
});


document.body.onload = function() {

  setTimeout(function(){
    var preloader = document.getElementById('page-preloader');
    if (!preloader.classList.contains('done'))
    {
      preloader.classList.add('done');
    }
  }, 1000)
}