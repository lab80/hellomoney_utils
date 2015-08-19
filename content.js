$('li.item').each(function() {
  if(!$(this).children('.js-holding-details').length) {
    $(this).click();
  }
});
