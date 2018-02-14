// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(function(){
  $('#btn').on('click', function(e){
    //Prevent default action of submit button. Needed for canvas to stay on page.
    e.preventDefault();

    //clear canvas before creating the grid
    clearCanvas();
    makeGrid();

    //listen to click on table cell
    $('#pixelCanvas tr').on('click', function(e){
      let colorPicked = $('#colorPicker').val();
      $(e.target).css('background-color', colorPicked);

    });

    //color pixelCanvas when clicked and mousedover
    $('#pixelCanvas tr').on('mousedown ', function(e){
      e.preventDefault();
      let colorPicked = $('#colorPicker').val();
      $(e.target).css('background-color', colorPicked);

    });

  });

  //create the NxM grid based on user input
  function makeGrid() {
    //get number of rows and columns for grid
    const rows = $('#inputHeight').val();
    const cols = $('#inputWeight').val();


    //append rows and columns to the table pixelCanvas
    for(var r = 0; r < rows; r++){
      $('#pixelCanvas').append('<tr></tr>');
      for(var c = 0; c < cols; c++){
        $('#pixelCanvas tr:last-child').append('<td></td>');

      }
    }

    $('#pixelCanvas tr td').each(function(){
      $(this).css('background-color', 'white');
    });

  }

  //clear canvas
  function clearCanvas(){
    $('#pixelCanvas tr').each(function(){
      $(this).remove();
    });
  }

});






  //set canvas cell to color picked by user
  /*function setColor(){
    var colorPicked = $('#colorPicker').val();
    $('#pixelCanvas tr td').css('background-color', colorPicked);
  }*/

  //animate pac-man ghost left to right and vice versa
/*  var windowWidth = $(window).width();
  function animateRight(){
    $('#pinkGhost').animate({
      left: windowWidth
    }, 5000, function(){
      setTimeout(animateLeft, 50);
    });
  }

  function animateLeft(){
    $('#pinkGhost').animate({
      left: 0
    }, 5000, function(){
      setTimeout(animateRight, 50);
    });
  }

  setTimeout(goRight, 50);*/
