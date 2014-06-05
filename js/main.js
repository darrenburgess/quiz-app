(function($){
$(document).ready(function() {

////////////////////////////////
// Cached Variables           //
////////////////////////////////

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
var linkWiki = $('#link-wiki');


////////////////////////////////
// General behaviors          //
////////////////////////////////

// Display What information overlay
whatButton.click(function(){
	overlayInfo.fadeIn(1000);
});

// abort prevents dismissal of all popovers
var jsAbort = function javascript_abort() {
   throw new Error('Javascript aborted via function');
};

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

// Dismiss question on escape - this should not run if dismissing What modal - this is not quite working
$(document).keyup(function(e){
	if(e.which === 27){
		questionBox.fadeOut(1000);
	}
});

////////////////////////////////
// Quiz behavior              //
////////////////////////////////

// On click of answer evaluate correctness of answer

// Display explanation panel for question after answering

// Modify highlight of area after answering

// Prevent answering question again after answering

// Update quiz result

// Start new quiz


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
    onClick: function (){
    	var data = collection[$(this).attr('id')];
    	questionBox.fadeIn(1000);
    	musicianName.html(data.name);
    	musicianImage.attr("src", data.headshot);
    	questionText.html(data.question);
    	answerA.html(data.answerA);
    	answerB.html(data.answerB);
    	answerC.html(data.answerC);
    	answerD.html(data.answerD);
    	console.log(data.wikiLink);
    	linkWiki.attr("href", data.wikiLink);
    	this.mapster({selected: true,});
    },
});

clickArea.mapster('set', true);

////////////////////////////////
// JSON data object           //
////////////////////////////////

var collection = {
    'sullivan' : { 
    	headshot:'img/sullivan.jpg', 
    	name: 'Maxine Sullivan', 
    	wikiLink:'http://en.wikipedia.org/wiki/Maxine_Sullivan',
		question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'hjones' : { 
    	headshot:'img/hjones.jpg', 
    	name: 'Hank Jones', 
    	wikiLink:'http://en.wikipedia.org/wiki/Hank_Jones',
		question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'rollins' : { 
    	headshot:'img/rollins.jpg', 
    	name: 'Sonny Rollins', 
    	wikiLink:'http://en.wikipedia.org/wiki/Sonny_Rollins',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'jjones' : { 
    	headshot:'img/jjones.jpg', 
    	name: 'Philly Joe Jones', 
    	wikiLink:'http://en.wikipedia.org/wiki/Philly_Joe_Jones',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'mingus' : { 
    	headshot:'img/mingus.jpg', 
    	name: 'Charles Mingus', 
    	wikiLink:'http://en.wikipedia.org/wiki/Charles_Mingus',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'silver' : { 
    	headshot:'img/silver.jpg', 
    	name: 'Horace Silver', 
    	wikiLink:'http://en.wikipedia.org/wiki/Horace_Silver',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'young' : { 
    	headshot:'img/young.jpg', 
    	name: 'Lester Young', 
    	wikiLink:'http://en.wikipedia.org/wiki/Lester_Young',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'blakey' : { 
    	headshot:'img/blakey.jpg', 
    	name: 'Art Blakey', 
    	wikiLink:'http://en.wikipedia.org/wiki/Art_Blakey',
    	question: 'Blakey was well known for hiring many young jazz musicians that later became famous.  The name of his band was: ',
		answerA: 'The Jazz Train',
		answerB: 'Art Blakey plus Five',
		answerC: 'The Jazz Messengers',
		answerD: 'Art Blakey\'s Orchestra',
		answerCorrect: 'C' },
    'mcpartland' : { 
    	headshot:'img/mcpartland.jpg', 
    	name: 'Marian McPartland', 
    	wikiLink:'http://en.wikipedia.org/wiki/Marian_McPartland',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'basie' : { 
    	headshot:'img/basie.jpg', 
    	name: 'Count Basie', 
    	wikiLink:'http://en.wikipedia.org/wiki/Count_Basie',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'mulligan' : { 
    	headshot:'img/mulligan.jpg', 
    	name: 'Gerry Mulligan', 
    	wikiLink:'http://en.wikipedia.org/wiki/Gerry_Mulligan',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'gillespie' : { 
    	headshot:'img/gillespie.jpg', 
    	name: 'Dizzy Gillespie', 
    	wikiLink:'http://en.wikipedia.org/wiki/Dizzy_Gillespie',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '' },
    'monk' : { 
    	headshot:'img/monk.jpg', 
    	name: 'Thelonius Monk', 
    	wikiLink:'http://en.wikipedia.org/wiki/Thelonius_Monk',
		question: 'This composition, recorded over 1000 times, was written by Monk when he was just 19:',
		answerA: 'Caravan',
		answerB: 'Scrapple from the Apple',
		answerC: '\'Round Midnight',
		answerD: 'Evidence',
		answerCorrect: 'C' },
    'hawkins' : { 
    	headshot:'img/hawkins.jpg', 
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