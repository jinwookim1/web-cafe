var section = $('.board section');
var tab = $('.tab');

tab.on('click', function(e){
  e.prevenDefault();
  section.removeClass('tab-act')
  $(this).parent().parent().addClass('tab-act')
})