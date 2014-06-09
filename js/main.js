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
var numberAnswered;
var numberAnsweredJQ = $('#number-answered');
var correctResult = $('#correct-result');


////////////////////////////////
// General behaviors          //
////////////////////////////////

// Display What information overlay
whatButton.click(function(){
	overlayInfo.fadeIn(1000);
});

// abort prevents dismissal of all popovers
// var jsAbort = function javascript_abort() {
//    throw new Error('Javascript aborted via function');
// };

// Dismiss What information overlay
$('a.close').click(function(){
	overlayInfo.fadeOut(1000);
});

$(document).keyup(function(e){
	if(e.which === 27){ // esc key pressed
		overlayInfo.fadeOut(1000);
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
	if(answered === false){
		correctResult.hide();
	} else {
		evaluateAnswer(answered, correctAnswer);
	}
};

// bind the image and image map to image mapster library
image.mapster({
	singleSelect: false,
	set: true,
	fill: true, 
	fillOpacity: 0.0,
	stroke: true,
	strokeColor: '00FF00',
	strokeWidth: 1,
	staticState: true,
	render_highlight: { 
		fillColor: 'FFFFFF',
		fillOpacity: 0.25,
    },
    onClick: function (){
    	data = collection[$(this).attr('id')];
    	renderQuestionBox();
    },
});

clickArea.mapster('set', true);

////////////////////////////////
// Quiz behavior              //
////////////////////////////////

// evaluate correctness of answer and display result
var evaluateAnswer = function(answer, correctAnswer){
	if(answer.toUpperCase() === correctAnswer.toUpperCase()){
			numberCorrectJQ.text(++numberCorrect);
			correctResult.show().text("Correct! You answered " + answer.toUpperCase() + ".");
		} else {
			correctResult.show().text("Incorrect! The correct answer is " + correctAnswer.toUpperCase() + ".");
		}
	numberAnsweredJQ.text(++numberAnswered);
};

// On click of answer
answer.click(function(e){
	if(data.answered === false){
		var selectedAnswer = e.target.id.slice(-1);
		numberCorrect = parseInt(numberCorrectJQ.text());
		numberAnswered = parseInt(numberAnsweredJQ.text());
		evaluateAnswer(selectedAnswer, correctAnswer);
		data.answered = selectedAnswer;
		$('blakey').mapster();
	}
});


////////////////////////////////
// JSON data object           //
////////////////////////////////

var collection = {
    'hjones' : { 
    	headshot:'img/hjones.jpg', 
    	name: 'Hank Jones', 
    	wikiLink:'http://en.wikipedia.org/wiki/Hank_Jones',
		question: 'During the late 40\'s and early 50\'s, Jones was the primary accompanist for this famous singer:',
		answerA: 'Ella Fitzgerald',
		answerB: 'Billy Holiday',
		answerC: 'Frank Sinatra',
		answerD: 'Sarah Vaughn',
		answerCorrect: 'a',
		answered: false },
    'rollins' : { 
    	headshot:'img/rollins.jpg', 
    	name: 'Sonny Rollins', 
    	wikiLink:'Rollins is well known for practicing long hours on this New York City bridge:',
		answerA: 'George Washington Bridge',
		answerB: 'Brooklyn Bridge',
		answerC: 'Williamsburg Bridge',
		answerD: 'Queensboro Bridge',
		answerCorrect: 'c',
		answered: false },
    'jjones' : { 
    	headshot:'img/jjones.jpg', 
    	name: 'Philly Joe Jones', 
    	wikiLink:'http://en.wikipedia.org/wiki/Philly_Joe_Jones',
    	question: 'Jones worked and recorded with this musician in the mid to late 50\'s in a band that became known as "The Quintet":',
		answerA: 'John Coltrane',
		answerB: 'Bill Evans',
		answerC: 'Chet Baker',
		answerD: 'Miles Davis',
		answerCorrect: 'd',
		answered: false },
    'mingus' : { 
    	headshot:'img/mingus.jpg', 
    	name: 'Charles Mingus', 
    	wikiLink:'http://en.wikipedia.org/wiki/Charles_Mingus',
    	question: 'Mingus composed and recorded this jazz standard in 1959 as an elegy for the saxaphonist Lester Young:',
		answerA: 'Pithecanthropus Erectus',
		answerB: 'Mood Indigo',
		answerC: 'Goodbye Pork Pie Hat',
		answerD: 'Reincarnation of a Lovebird',
		answerCorrect: 'c',
		answered: false },
    'silver' : { 
    	headshot:'img/silver.jpg', 
    	name: 'Horace Silver', 
    	wikiLink:'http://en.wikipedia.org/wiki/Horace_Silver',
    	question: 'Silver\'s extensive recordings for this record label were highly influential in the formation of the "hard bop" jazz genre:',
		answerA: 'Atlantic',
		answerB: 'Verve',
		answerC: 'Blue Note',
		answerD: 'Riverside',
		answerCorrect: 'c',
		answered: false },
    'young' : { 
    	headshot:'img/young.jpg', 
    	name: 'Lester Young', 
    	wikiLink:'http://en.wikipedia.org/wiki/Lester_Young',
    	question: 'Young spent a significant part of his early career with this big band orchestra:',
		answerA: 'Count Basie',
		answerB: 'Benny Goodman',
		answerC: 'Duke Ellington',
		answerD: 'Glenn Miller',
		answerCorrect: 'a',
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
    	question: 'In the early days of the Bebop style of Jazz, Gillespie frequented jam sessions with Charlie Parker at this famous night club in New York City:',
		answerA: 'Village Vanguard',
		answerB: 'Minton\'s Playhouse',
		answerC: 'Blue Note',
		answerD: 'The Cotton Club',
		answerCorrect: 'a',
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
    	question: 'Hawkins first recorded this jazz standard in 1939.  It is this version of the popular swing tune that is considered one of the "early tremors of bebop."',
		answerA: 'April in Paris',
		answerB: 'Salt Peanuts',
		answerC: 'My Funny Valentine',
		answerD: 'Body and Soul',
		answerCorrect: 'd',
		answered: false }
	};


//end jQuery 
});

})(jQuery);