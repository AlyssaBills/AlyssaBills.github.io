"use strict"


$(document).ready(function(){
  showStartModal();
});

function showStartModal(){
  setTimeout(function(){
    $('#exampleModal').modal('show');
    $('btn-accept').on('click', function(){

      $('#exampleModal').modal('hide');
    });
  }, 8000);
  
}

