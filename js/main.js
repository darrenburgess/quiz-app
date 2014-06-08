(function($){
$(document).ready(function() {

////////////////////////////////
// Cached Variables           //
////////////////////////////////

var image = $('#jazz-masters');
var clickArea = $('area');
var whatButton = $('.what');
var overlayInfo = $('.overlay');
var data;

// question box
var closeQuestion = $('.close-question');
var questionBox = $('#question-box');
var musicianName = $('#musician-name');
var questionText = $('#question-text');
var musicianImage = $('#musician-image');
var question = $('.question');
var answer = $('.answer');
var answerA = $('#answer-a');
var answerB = $('#answer-b');
var answerC = $('#answer-c');
var answerD = $('#answer-d');
var answered;
var linkWiki = $('#link-wiki');
var correctAnswer;
var numberCorrect;
var numberCorrectJQ = $('#number-correct');
var correctResult = $('#correct-result');


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

var renderQuestionBox = function(){
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
	answered = data.answered;
	console.log(answered);
	if(answered === false){
		correctResult.hide();
	} else {
		evaluateAnswer(answered, correctAnswer);
	}
	jsAbort();
	// this.mapster({selected: true,}); // throws undefined error
};

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
    	data = collection[$(this).attr('id')];
    	if (data.answered === false){
    		renderQuestionBox();
	    } else {
    		renderQuestionBox();
    	}
    },
});

clickArea.mapster('set', true);

////////////////////////////////
// Quiz behavior              //
////////////////////////////////

var evaluateAnswer = function(answer, correctAnswer){
	console.log("test:" + answer, correctAnswer);
	if(answer.toUpperCase() === correctAnswer.toUpperCase()){
			numberCorrectJQ.text(++numberCorrect);
			correctResult.show().text("Correct! You answered " + answer.toUpperCase() + ".");
		} else {
			correctResult.show().text("Incorrect! The correct answer is " + correctAnswer.toUpperCase() + ".");
	}
};

// On click of answer evaluate correctness of answer
answer.click(function(e){
	if(data.answered === false){
		var selectedAnswer = e.target.id.slice(-1);
		var numberCorrect = parseInt(numberCorrectJQ.text());
		evaluateAnswer(selectedAnswer, correctAnswer);
		data.answered = selectedAnswer;
	}
	// change highlight of image map area
});

// Prevent answering question again after answering

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
		answerCorrect: '',
		answered: false },
    'hjones' : { 
    	headshot:'img/hjones.jpg', 
    	name: 'Hank Jones', 
    	wikiLink:'http://en.wikipedia.org/wiki/Hank_Jones',
		question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '',
		answered: false },
    'rollins' : { 
    	headshot:'img/rollins.jpg', 
    	name: 'Sonny Rollins', 
    	wikiLink:'http://en.wikipedia.org/wiki/Sonny_Rollins',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '',
		answered: false },
    'jjones' : { 
    	headshot:'img/jjones.jpg', 
    	name: 'Philly Joe Jones', 
    	wikiLink:'http://en.wikipedia.org/wiki/Philly_Joe_Jones',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '',
		answered: false },
    'mingus' : { 
    	headshot:'img/mingus.jpg', 
    	name: 'Charles Mingus', 
    	wikiLink:'http://en.wikipedia.org/wiki/Charles_Mingus',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '',
		answered: false },
    'silver' : { 
    	headshot:'img/silver.jpg', 
    	name: 'Horace Silver', 
    	wikiLink:'http://en.wikipedia.org/wiki/Horace_Silver',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '',
		answered: false },
    'young' : { 
    	headshot:'img/young.jpg', 
    	name: 'Lester Young', 
    	wikiLink:'http://en.wikipedia.org/wiki/Lester_Young',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '',
		answered: false },
    'blakey' : { 
    	headshot:'img/blakey.jpg', 
    	name: 'Art Blakey', 
    	wikiLink:'http://en.wikipedia.org/wiki/Art_Blakey',
    	question: 'Blakey was well known for hiring many young jazz musicians that later became famous (ex: Wynton Marsalis).  The name of his band was: ',
		answerA: 'The Jazz Train',
		answerB: 'Art Blakey plus Five',
		answerC: 'The Jazz Messengers',
		answerD: 'Art Blakey\'s Orchestra',
		answerCorrect: 'c',
		answered: false },
    'mcpartland' : { 
    	headshot:'img/mcpartland.jpg', 
    	name: 'Marian McPartland', 
    	wikiLink:'http://en.wikipedia.org/wiki/Marian_McPartland',
    	question: 'McPartland was well known for this weekly radio program that features piano duets and interviews with famous jazz musicians:',
		answerA: 'Marian Plays with the Masters',
		answerB: 'Piano Weekly with Marian',
		answerC: 'Playing with Marian McPartland',
		answerD: 'Marian McPartland\'s Piano Jazz',
		answerCorrect: 'd',
		answered: false },
    'basie' : { 
    	headshot:'img/basie.jpg', 
    	name: 'Count Basie', 
    	wikiLink:'http://en.wikipedia.org/wiki/Count_Basie',
    	question: 'Famous for his prolific career as pianist and leader of the Count Basie Orchestra, Basie was best known for this style of jazz:',
		answerA: 'Bebop',
		answerB: 'Swing',
		answerC: 'Dixieland',
		answerD: 'Hard bop',
		answerCorrect: 'b',
		answered: false },
    'mulligan' : { 
    	headshot:'img/mulligan.jpg', 
    	name: 'Gerry Mulligan', 
    	wikiLink:'http://en.wikipedia.org/wiki/Gerry_Mulligan',
    	question: 'Mulligan\'s bariton sax, composition and arranging work with Miles Davis in the late 40\'s and early 50\'s lead to a number of highly influential recordings released on this album:',
		answerA: 'Birth of the Cool',
		answerB: 'Mulligan plays Mulligan',
		answerC: 'Mainstream of Jazz',
		answerD: 'Sketches of Spain',
		answerCorrect: 'a',
		answered: false },
    'gillespie' : { 
    	headshot:'img/gillespie.jpg', 
    	name: 'Dizzy Gillespie', 
    	wikiLink:'http://en.wikipedia.org/wiki/Dizzy_Gillespie',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '',
		answered: false },
    'monk' : { 
    	headshot:'img/monk.jpg', 
    	name: 'Thelonius Monk', 
    	wikiLink:'http://en.wikipedia.org/wiki/Thelonius_Monk',
		question: 'This iconic composition, recorded over 1000 times, was written by Monk when he was just 19:',
		answerA: 'Caravan',
		answerB: 'Scrapple from the Apple',
		answerC: '\'Round Midnight',
		answerD: 'Evidence',
		answerCorrect: 'c',
		answered: false },
    'hawkins' : { 
    	headshot:'img/hawkins.jpg', 
    	name: 'Coleman Hawkins', 
    	wikiLink:'http://en.wikipedia.org/wiki/Coleman_Hawkins',
    	question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		answerCorrect: '',
		answered: false }
	};


//end jQuery 
});

})(jQuery);