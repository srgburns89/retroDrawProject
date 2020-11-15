function makeGrid () {
    const grid = $('.grid');
    for (let i = 0; i <= 63; i +=1){
    let box = $('<div class ="cell"></div>');
    grid.append(box);
    }
}
makeGrid();

function makePalette () {
    const PALETTE = [
        'red',
        'blue',
        'green',
        'yellow',
        'orange',
        'white',
        'pink',
        'violet',
        'gray',
      ];

      const paletteEl = $('.palette');

      for (let index = 0; index < PALETTE.length; index = index + 1) {
        let button = $('<button>');
        const nextColor = PALETTE[index]
        button.css('background', nextColor);
        paletteEl.append(button);
      }
      $('.palette button').first().addClass('active');
}

makePalette();

function onPaletteClick() {
    // code goes here
    $('.palette .active').removeClass('active');
    $(this).addClass('active');
  }
 
  $('.palette button').click(onPaletteClick);

  
  function onGridClick() {
      let clickedColor = $('.palette .active').css('backgroundColor');
      let cellColor= $(this).css('backgroundColor');

if (clickedColor === cellColor){
 $(this).css('background-color', '');
} else {
 // So does this:
 $(this).css('backgroundColor', clickedColor);
}
}

  $('.grid .cell').click(onGridClick);

function onClearClick() {
    let makeEmptyCells = $('.grid .cell');

    makeEmptyCells.css('background-color', '');

}

$('.controls .clear').click(onClearClick);

function onFillAllClick() {
    let clickedColor = $('.palette .active').css('backgroundColor');
    $('.cell').css('backgroundColor',clickedColor);

}
$('.controls .fill-all').click(onFillAllClick)

function onFillEmptyClick() {

    const elements = $('.cell')
    let clickedColor = $('.palette .active').css('backgroundColor');

    for (let index = 0; index < elements.length; index = index + 1) {
      let nextElement = $( elements[index] );

      if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
          nextElement.css('background-color', clickedColor);
      }

}
}

$('.controls .fill-empty').click(onFillEmptyClick);

