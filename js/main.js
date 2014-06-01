(function($){
$(document).ready(function() {

$('#jazz-masters').mapster({
	fill: true, 
	fillColor: '0000FF',
	fillOpacity: 0.2,
	stroke: true,
	strokeColor: '00FF00',
	strokeWidth: .5,
});

$('area').mapster('set', true);

//end jQuery 
});

})(jQuery);