$(function(){
	var indicator = $('#voteIndicator');
	var shuyuans = $('#map a');

	function showIndi() {		
		indicator.css({
			opacity: '1',			
		});
		indicator.stop().animate({
			top: '-0.6rem',
			opacity: '0'
		},function() {
			indicator.css({
				top: '0.69333rem',			
			});
		});
	}
	function addValue(jqobj) {
		var tmpval = jqobj.html();
		tmpval = parseInt(tmpval)+1;
		jqobj.html(tmpval);
	}
	shuyuans.on('click', function() {
		//后台传验证规则
		var token = true;
		if(token){
			showIndi();
		 	addValue($(this).children('span'));
		}
	});
})