$(function(){
    var includes = $('[data-include]');
    //document.querySelector("[data-include]").innerText;
    jQuery.each(includes, function(){
        var file = 'components/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});

$('.menu-btn').on('click', function() {
   $('.menu-wrapper').slideToggle('slow');
});

let editPopup = document.querySelectorAll('.edit-popup');
let editPopupSwitcher = false;

$('#edit').on('click', function() {
	editPopupSwitcher = !editPopupSwitcher;
	this.classList.remove('pulse');

	if (editPopupSwitcher){
      TweenMax.to(editPopup,1,{x:'2%',display:'block',height:'65vh',ease:Back.easeOut});
      } 
  	else {
        TweenMax.to(editPopup,1,{x:'-200%',display:'block',height:'0vh',ease:Power3.easeOut});
      }
});