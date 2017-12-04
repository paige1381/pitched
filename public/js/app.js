$(() => {

  const mouseEnter = (event) => {
    $(event.currentTarget).parent().children('.img-text').css('visibility', 'visible');
  }

  const mouseLeave = (event) => {
    $(event.currentTarget).parent().children('.img-text').css('visibility', 'hidden')
  }

  $('.index-card').eq(2).addClass('middle');

  $('.img-index').hover(mouseEnter, mouseLeave);

})
