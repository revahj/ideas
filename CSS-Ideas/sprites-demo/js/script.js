$(document).ready(function(){
	
	
	$('#menu li').each(function(){
		var classOver = $(this).attr('class') + '_over';
		var classOn = $(this).attr('class') + '_on';
		
		$(this).hover(function(){
			$(this).addClass(classOver);
		}, function(){
			$(this).removeClass(classOver);
			$(this).addClass('sprite-image');
		});
		
		$(this).toggle(function(){
			$(this).addClass(classOn);
		}, function(){
			$(this).removeClass(classOn);
			$(this).addClass('sprite-image');
		});
		
	});

});