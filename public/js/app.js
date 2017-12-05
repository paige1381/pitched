
$(() => {

  // image hover behavior
  const mouseEnter = (event) => {
    $(event.currentTarget).parent().children('.img-text').css('visibility', 'visible');
  }

  const mouseLeave = (event) => {
    $(event.currentTarget).parent().children('.img-text').css('visibility', 'hidden')
  }

  $('.img-index').hover(mouseEnter, mouseLeave);


  // assigning class for card images
  $('.edit-row').children('.index-card').eq(1).addClass('middle');

})
