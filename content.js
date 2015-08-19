$("li.item:not(:has('.js-holding-details'))").click();

if(window.__interval) clearInterval(window.__interval);
window.__interval = setInterval(function() {
  $(".metric:not(:has('.pill.active'))").css({
    'background-color': 'beige'
  });
  $(".metric:has('.pill.active')").css({
    'background-color': 'transparent'
  });
}, 1000);

setTimeout(function() {
  clearInterval(window.__interval);
  delete window.__interval;
}, 10000);
