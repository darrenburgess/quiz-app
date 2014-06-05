(function($){
$(document).ready(function() {

// cached variables	

var image = $('#jazz-masters');
var clickArea = $('area');
var whatButton = $('.what');
var overlayInfo = $('.overlay');

// question box
var closeQuestion = $('.close-question');
var questionBox = $('#question-box');
var musicianName = $('#musician-name');
var questionText = $('#question-text');
var musicianImage = $('#musician-image');
var answerA = $('#answer-a');
var answerB = $('#answer-b');
var answerC = $('#answer-c');
var answerD = $('#answer-d');

var jsAbort = function javascript_abort() {
   throw new Error('Javascript aborted via function');
};

////////////////////////////////
// General behaviors          //
////////////////////////////////

// Display What information overlay
whatButton.click(function(){
	overlayInfo.fadeIn(1000);
});

// Dismiss What information overlay
$('a.close').click(function(){
	overlayInfo.fadeOut(1000);
	jsAbort();
});

$(document).keyup(function(e){
	if(e.which === 27){ // esc key pressed
		overlayInfo.fadeOut(1000);
		jsAbort();
	}
});

// Dismiss question popover
closeQuestion.click(function(){
	questionBox.fadeOut(1000);
});

// // Dismiss question on escape - this should not run if dismissing What modal
$(document).keyup(function(e){
	if(e.which === 27){
		questionBox.fadeOut(1000);
	}
});




////////////////////////////////
// Image map behavior         //
////////////////////////////////

// Render all of the circles
image.mapster({
	set: true,
	fill: true, 
	fillColor: '000000',
	fillOpacity: 0.0,
	stroke: true,
	strokeColor: '00FF00',
	strokeWidth: 1,
	render_highlight: { 
		fillColor: 'FFFFFF',
		fillOpacity: 0.33,
    },
    onClick: function (e){
    	var data = collection[$(this).attr('id')];
    	console.log(data);
    	questionBox.fadeIn(1000);
    	musicianName.html(data.name);
    	musicianImage.attr("src", data.headshot);
    	questionText.html(data.question);
    	answerA.html(data.answerA);
    	answerB.html(data.answerB);
    	answerC.html(data.answerC);
    	answerD.html(data.answerD);
    },
});

clickArea.mapster('set', true);

// this will access the data, somehow
// $('button').bind('click', function(e){
//     var data = collection[$(this).attr('id')];
//     $('#ok').html(data.name);
//     $('#ok').append('<br>' + data.headshot);
// });




////////////////////////////////
// JSON data object           //
////////////////////////////////

var collection = {
    'sullivan' : { 
    	headshot:'/img/sullivan.png', 
    	name: 'Maxine Sullivan', 
    	wikiLink:'http://en.wikipedia.org/wiki/Maxine_Sullivan',
		question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'hjones' : { 
    	headshot:'/img/hjones.png', 
    	name: 'Hank Jones', 
    	wikiLink:'http://en.wikipedia.org/wiki/Hank_Jones',
		question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'rollins' : { 
    	headshot:'/img/rollins.png', 
    	name: 'Sonny Rollins', 
    	wikiLink:'http://en.wikipedia.org/wiki/Sonny_Rollins',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'jjones' : { 
    	headshot:'/img/jjones.png', 
    	name: 'Philly Joe Jones', 
    	wikiLink:'http://en.wikipedia.org/wiki/Philly_Joe_Jones',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'mingus' : { 
    	headshot:'/img/mingus.png', 
    	name: 'Charles Mingus', 
    	wikiLink:'http://en.wikipedia.org/wiki/Charles_Mingus',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'silver' : { 
    	headshot:'/img/silver.png', 
    	name: 'Horace Silver', 
    	wikiLink:'http://en.wikipedia.org/wiki/Horace_Silver',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'young' : { 
    	headshot:'/img/young.png', 
    	name: 'Lester Young', 
    	wikiLink:'http://en.wikipedia.org/wiki/Lester_Young',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'blakey' : { 
    	headshot:'/img/blakey.png', 
    	name: 'Art Blakey', 
    	wikiLink:'http://en.wikipedia.org/wiki/Art_Blakey',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'mcpartland' : { 
    	headshot:'/img/mcpartland.png', 
    	name: 'Marian McPartland', 
    	wikiLink:'http://en.wikipedia.org/wiki/Marian_McPartland',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'basie' : { 
    	headshot:'/img/basie.png', 
    	name: 'Count Basie', 
    	wikiLink:'http://en.wikipedia.org/wiki/Count_Basie',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'mulligan' : { 
    	headshot:'/img/mulligan.png', 
    	name: 'Gerry Mulligan', 
    	wikiLink:'http://en.wikipedia.org/wiki/Gerry_Mulligan',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'gillespie' : { 
    	headshot:'/img/gillespie.png', 
    	name: 'Dizzy Gillespie', 
    	wikiLink:'http://en.wikipedia.org/wiki/Dizzy_Gillespie',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'monk' : { 
    	headshot:'/img/monk.jpg', 
    	name: 'Thelonius Monk', 
    	wikiLink:'http://en.wikipedia.org/wiki/Thelonius_Monk',
		question: 'This composition, recorded over 1000 times, was written by Monk when he was just 19:',
		answerA: 'Caravan',
		answerB: 'Scrapple from the Apple',
		answerC: '\'Round Midnight',
		answerD: 'Evidence',
		answerCorrect: 'C' },
    'hawkins' : { 
    	headshot:'/img/hawkins.png', 
    	name: 'Coleman Hawkins', 
    	wikiLink:'http://en.wikipedia.org/wiki/Coleman_Hawkins',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' }
	};



//end jQuery 
});

})(jQuery);