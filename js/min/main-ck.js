!function(e){e(document).ready(function(){var n=e("#jazz-masters"),i=e("area"),a=e(".what"),r=e(".overlay"),s=e(".close-question"),t=e("#question-box"),o=e("#musician-name"),w=e("#question-text"),l=e("#musician-image"),k=e("#answer-a"),h=e("#answer-b"),u=e("#answer-c"),g=e("#answer-d"),p=function c(){throw new Error("Javascript aborted via function")};a.click(function(){r.fadeIn(1e3)}),e("a.close").click(function(){r.fadeOut(1e3),p()}),e(document).keyup(function(e){27===e.which&&(r.fadeOut(1e3),p())}),s.click(function(){t.fadeOut(1e3)}),e(document).keyup(function(e){27===e.which&&t.fadeOut(1e3)}),n.mapster({set:!0,fill:!0,fillColor:"000000",fillOpacity:0,stroke:!0,strokeColor:"00FF00",strokeWidth:1,render_highlight:{fillColor:"FFFFFF",fillOpacity:.33},onClick:function(n){var i=m[e(this).attr("id")];console.log(i),t.fadeIn(1e3),o.html(i.name),l.attr("src",i.headshot),w.html(i.question),k.html(i.answerA),h.html(i.answerB),u.html(i.answerC),g.html(i.answerD)}}),i.mapster("set",!0);var m={sullivan:{headshot:"/img/sullivan.png",name:"Maxine Sullivan",wikiLink:"http://en.wikipedia.org/wiki/Maxine_Sullivan",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},hjones:{headshot:"/img/hjones.png",name:"Hank Jones",wikiLink:"http://en.wikipedia.org/wiki/Hank_Jones",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},rollins:{headshot:"/img/rollins.png",name:"Sonny Rollins",wikiLink:"http://en.wikipedia.org/wiki/Sonny_Rollins",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},jjones:{headshot:"/img/jjones.png",name:"Philly Joe Jones",wikiLink:"http://en.wikipedia.org/wiki/Philly_Joe_Jones",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},mingus:{headshot:"/img/mingus.png",name:"Charles Mingus",wikiLink:"http://en.wikipedia.org/wiki/Charles_Mingus",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},silver:{headshot:"/img/silver.png",name:"Horace Silver",wikiLink:"http://en.wikipedia.org/wiki/Horace_Silver",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},young:{headshot:"/img/young.png",name:"Lester Young",wikiLink:"http://en.wikipedia.org/wiki/Lester_Young",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},blakey:{headshot:"/img/blakey.png",name:"Art Blakey",wikiLink:"http://en.wikipedia.org/wiki/Art_Blakey",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},mcpartland:{headshot:"/img/mcpartland.png",name:"Marian McPartland",wikiLink:"http://en.wikipedia.org/wiki/Marian_McPartland",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},basie:{headshot:"/img/basie.png",name:"Count Basie",wikiLink:"http://en.wikipedia.org/wiki/Count_Basie",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},mulligan:{headshot:"/img/mulligan.png",name:"Gerry Mulligan",wikiLink:"http://en.wikipedia.org/wiki/Gerry_Mulligan",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},gillespie:{headshot:"/img/gillespie.png",name:"Dizzy Gillespie",wikiLink:"http://en.wikipedia.org/wiki/Dizzy_Gillespie",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""},monk:{headshot:"../img/monk.jpg",name:"Thelonius Monk",wikiLink:"http://en.wikipedia.org/wiki/Thelonius_Monk",question:"This composition, recorded over 1000 times, was written by Monk when he was just 19:",answerA:"Caravan",answerB:"Scrapple from the Apple",answerC:"'Round Midnight",answerD:"Evidence",answerCorrect:"C"},hawkins:{headshot:"/img/hawkins.png",name:"Coleman Hawkins",wikiLink:"http://en.wikipedia.org/wiki/Coleman_Hawkins",question:"",answerA:"",answerB:"",answerC:"",answerD:"",answerCorrect:""}}})}(jQuery);