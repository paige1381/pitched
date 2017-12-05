
// edit image preview
// adapted from https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL


const previewImgs = () => {
  let preview = document.querySelector('#preview');
  let files   = document.querySelector('input[type=file]').files;

  const readAndPreview = (file) => {
    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.title = file.name;
        image.src = this.result;
        preview.appendChild(image);
      }, false);

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}


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
  $('.row-2').children('.index-card').eq(1).addClass('middle');
  $('.edit-row').children('.index-card').eq(1).addClass('middle');
  // $('.alt-index').children('.index-card').eq(1).addClass('middle');

})
