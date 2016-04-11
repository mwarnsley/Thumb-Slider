$(function(){
	// Declare vars
	var totalWidth = 0;
	var positions = new Array();
	
	$('#slides .slide').each(function(i){
		// Get slider widths
		positions[i] = totalWidth;
		totalWidth += $(this).width();
		
		// Check widths
		if(!$(this).width()){
			alert('Please add a width to your images');
			return false;
		}
	});
});