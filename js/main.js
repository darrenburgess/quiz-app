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
var correctAnswer;


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
    	correctAnswer = data.answerCorrect;
    	linkWiki.attr("href", data.wikiLink);
    	this.mapster({selected: true,}); // throws undefined error
    },
});

clickArea.mapster('set', true);

////////////////////////////////
// Quiz behavior              //
////////////////////////////////

// On click of answer evaluate correctness of answer
$('.answer').click(function(e){
	var selectedAnswer = e.target.id.slice(-1);
	var numberCorrectJQ = $('#number-correct');
	var numberCorrect = parseInt(numberCorrectJQ.text());
	console.log(numberCorrect);
	if(selectedAnswer === correctAnswer){
		numberCorrectJQ.text(++numberCorrect);
	} else {
		// incorrect answer
	}
});

// Increment answer result

var incrementAnswer = function(){

};

// Prevent answering question again after answering

// Display explanation panel for question after answering

// Modify highlight of area after answering

// Update quiz result

// Start new quiz

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
    	question: 'Blakey was well known for hiring many young jazz musicians that later became famous (ex: Wynton Marsalis).  The name of his band was: ',
		answerA: 'The Jazz Train',
		answerB: 'Art Blakey plus Five',
		answerC: 'The Jazz Messengers',
		answerD: 'Art Blakey\'s Orchestra',
		answerCorrect: 'c' },
    'mcpartland' : { 
    	headshot:'img/mcpartland.jpg', 
    	name: 'Marian McPartland', 
    	wikiLink:'http://en.wikipedia.org/wiki/Marian_McPartland',
    	question: 'McPartland was well known for this weekly radio program that features piano duets and interviews with famous jazz musicians:',
		answerA: 'Marian Plays with the Masters',
		answerB: 'Piano Weekly with Marian',
		answerC: 'Playing with Marian McPartland',
		answerD: 'Marian McPartland\'s Piano Jazz',
		answerCorrect: 'd' },
    'basie' : { 
    	headshot:'img/basie.jpg', 
    	name: 'Count Basie', 
    	wikiLink:'http://en.wikipedia.org/wiki/Count_Basie',
    	question: 'Famous for his prolific career as pianist and leader of the Count Basie Orchestra, Basie was best known for this style of jazz:',
		answerA: 'Bebop',
		answerB: 'Swing',
		answerC: 'Dixieland',
		answerD: 'Hard bop',
		answerCorrect: 'b' },
    'mulligan' : { 
    	headshot:'img/mulligan.jpg', 
    	name: 'Gerry Mulligan', 
    	wikiLink:'http://en.wikipedia.org/wiki/Gerry_Mulligan',
    	question: 'Mulligan\'s bariton sax, composition and arranging work with Miles Davis in the late 40\'s and early 50\'s lead to a number of highly influential recordings released on this album:',
		answerA: 'Birth of the Cool',
		answerB: 'Mulligan plays Mulligan',
		answerC: 'Mainstream of Jazz',
		answerD: 'Sketches of Spain',
		answerCorrect: 'a' },
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
		question: 'This iconic composition, recorded over 1000 times, was written by Monk when he was just 19:',
		answerA: 'Caravan',
		answerB: 'Scrapple from the Apple',
		answerC: '\'Round Midnight',
		answerD: 'Evidence',
		answerCorrect: 'c' },
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