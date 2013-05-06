


$(document).ready(function() {
	var FAV_API_PATH = $('body').data('fav-api-path');
	
	if($('html').hasClass('localstorage')) {
		var _ls = localStorage.getItem('devriesjp-favs') || null;
		_favxFavs = (_ls) ? _ls.split(',') : [];
	}
	else if($('html').hasClass('cookies')) {
		var _lc = $.cookie('devriesjp-favs') || null;
		_favxFavs = (_lc) ? _lc.split(',') : [];
	}
	

	
	/*if($('html').hasClass('localstorage')) {
		_favxFavs = getLocalStorage();
	}
	else if($('html').hasClass('cookies')) {
		_favxFavs = doCookie();
	}*/
	
	//console.log(FAV_API_PATH + 'ids=' + _favxFavs.join(','));
	
	
	/// make the request (BIG PIPE)
	if(getLocalStorage() && $('body').hasClass('t-12') && $('.leftcol').children('no-rsults').length < 1) {
		console.log(FAV_API_PATH + 'ids=' + _favxFavs.join(','));
		if(_favxFavs.length) {
			$.ajax({
				url: FAV_API_PATH + '&ids=' + _favxFavs.join(','),
				context: document.body,
				dataFilter: function(data, type){
					$('.t-12 .leftcol').html(data);
					assignStarListeners();
					//activateStars(); 
					//assignStarListeners();
				}
			});		
		}

	}

	
	

	
	

	
	
});

	function activateStars() {
		var l = _favxFavs.length;
		for(var i = 0; i < l; i++) { 
			var _id = _favxFavs[i] || '';
			if(_id) $('a.favorite[data-devries-post-id="' + _id + '"]').addClass('on');
		}
	}
	
	function getLocalStorage() {
		//console.log('doLocalStorage');
		var _favs = localStorage.getItem('devriesjp-favs') || null;
		//localStorage.setItem('devriesjp-favs',['88','91','94']);
	
		/*if(!_favs) {
		localStorage.setItem('devriesjp-favs',['88','91','94']);
		var _favs = localStorage.getItem('devriesjp-favs') || null;
		}*/
	
		//console.log(_favs);
		//_favs = _favs.split(',');
	
		if(!_favs) return null;
		return _favs.split(',');
	}	



/*function doCookie() {
	//console.log('doCookie');
	var s = '';
	var _ids = new Array();
	var sids;
	try {
		sids = $.cookie('devriesjp-favs');
	} catch(e) {}

	//if(!sids) { $.cookie('devriesjp-favs',['187','91'],{expires:9007199254740992}); sids = $.cookie('devriesjp-favs'); }

	return sids.split(',');
}*/