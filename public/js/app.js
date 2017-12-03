$(() => {

  const mouseEnter = (event) => {
    $(event.currentTarget).parent().children('.img-text').css('visibility', 'visible');
  }

  const mouseLeave = (event) => {
    $(event.currentTarget).parent().children('.img-text').css('visibility', 'hidden')
  }

  $('.img-index').hover(mouseEnter, mouseLeave);

})
