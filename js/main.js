(function($){
$(document).ready(function() {

var image = $('#jazz-masters');

var clickArea = $('area');

image.mapster({
	set: true,
	fill: true, 
	fillColor: '000000',
	fillOpacity: 0.0,
	stroke: true,
	strokeColor: '00FF00',
	strokeWidth: 1,
	render_highlight: { 
		strokeWidth: 1,
		fillColor: '0000FF',
		fillOpacity: 0.25,
    },
});

clickArea.mapster('set', true);



//end jQuery 
});

})(jQuery);