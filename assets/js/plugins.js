/*
//@codekit-append "jquery.flexslider.js";
//@codekit-append "swfobject.js";
//@codekit-append "browserdetect.js";
//@codekit-append "jquery.fancybox.2.1.0.js"; 
//@codekit-append "mylibs/favx.js"; 
*/
var _favxFavs = [];

// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

  function assignStarListeners() {
  	//console.log('assignStarListeners');
  	_favxFavs = getLocalStorage() || [];
  	
  	$.each(_favxFavs, function(key, value){
	  	$('a.favorite[data-devries-post-id="' + value + '"]').addClass('on');
  	});
  	
  	
	$('a.favorite:not(.vert-tag a.favorite)').clickToggle();
	$('a.favorite').click(function(e){
		e.preventDefault();
		var _id = $(this).data('devries-post-id');
		console.log('clicked: ' + _id);
		if(!_id) return;
		var _active = $(this).hasClass('on');
		var _index = _favxFavs.indexOf(_id.toString());
		console.log(_index);
		if(_active) {
			// if it isn't already there, add it
			if(_index < 0) _favxFavs.push(_id.toString());
		} else {
			// if it is there, remove it
			if(_index > -1) {
				console.log('removing');
				_favxFavs = $.grep(_favxFavs, function(n,i){
					console.log(n + ' ' + _index);
					return i != _index;
				})
			}
		}
		
		
		//console.log('saving');
		//console.log(_favxFavs);
		
		if($('html').hasClass('localstorage')) localStorage.setItem('devriesjp-favs',_favxFavs);
		else if($('html').hasClass('cookies')) $.cookie('devriesjp-favs',_favxFavs,{expires:9007199254740992});

		if($('html').hasClass('localstorage')) console.log(localStorage.getItem('devriesjp-favs'));
		else if($('html').hasClass('cookies')) console.log($.cookie('devriesjp-favs'));
	});
  }

/* click toggle */
$.fn.clickToggle = function(options) {
	$.fn.clickToggle.defaults = {
		'toggleClass':'on'
	}
	
	// merge the provided options with the default options
	$.fn.clickToggle.opts = $.extend({}, $.fn.clickToggle.defaults, options);

	return this.each(function() {
		$(this).click(function(){
			$(this).toggleClass($.fn.clickToggle.opts.toggleClass);
		});
		return $(this);
	});	
};
/* end click toggle */



// Place any jQuery/helper plugins in here.
