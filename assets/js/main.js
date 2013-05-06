/*
//@codekit-prepend "plugins.js"; 
*/

 

$(document).ready(function(){ 
	_favxFavs = getLocalStorage();
	if(_favxFavs) $('p.favorite-message').html($('p.favorite-message').data('view-favorites') + ' <a href="' + $('body').data('fav-view-path') + '">' + 'here' + '</a>.');
	$('.favorites').show();
	// has Flash, yea or nea?
	if (swfobject.hasFlashPlayerVersion("9.0.18")) $('html').addClass('flash');
	
	// i hate doing this but have to because Windows sucks http://devries.jp/blog/2012/10/21/oh-windows/
	$('html').addClass('browser-' + BrowserDetect.browser.toLowerCase()).addClass('os-' + BrowserDetect.OS.toLowerCase());
	
	// animate past the URL bar
	$('.touch, .touch body').animate({
         scrollTop: 0
     }, 240); 
     
     // scroll to tup
	$('#scroll_to_top').click(function(e){
		e.preventDefault();
		$('html, body').animate({ 
         scrollTop: 0
     }, 860);
	});   
	
	// archive-year-slider
	$('.flexslider').flexslider({ 
		animation:"slide",
		animationLoop:false,
		controlNav:false,
		slideshow:false
	}).children('.flex-direction-nav').children('li').first().addClass('prev').parent().children('li').last().addClass('next');
	
	// replace links for JS enabled
	$('.js .href-replace-js').each(function(){
		var _h = $(this).data('href');
		if(_h) $(this).attr('href',_h);
	});
	
	// replace links for Flash enabled
	$('.flash.no-touch .href-replace-swf').each(function(){
		var _h = $(this).data('href');
		if(_h) $(this).attr('href',_h);
	});
	
	
  $.fancybox.defaults.minWidth = 240;
  $.fancybox.defaults.minHeight = 240;   
  $.fancybox.defaults.padding = 0; 
  $.fancybox.defaults.margin = 16;
  $.fancybox.defaults.openEffect = 'fade'; 
  $.fancybox.defaults.nextEffect = 'elastic'; 
  $.fancybox.defaults.prevEffect = 'elastic';  
  $.fancybox.defaults.scrolling = 'no';
  $.fancybox.defaults.loop = false;
  $.fancybox.defaults.autoDimensions = true; 
  $.fancybox.defaults.autoSize = true; 
  $.fancybox.defaults.scrolling = false;  
  $.fancybox.defaults.loop = true; 
  
  
  $('.fancybox').fancybox({

  });
  

	
  if(!$('body').hasClass('t-12')) assignStarListeners();
  

});
