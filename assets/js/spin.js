'use strict';

const character = [
    {
        name: 'enterteiment',
        url: 'assets/img/enterteiment.png',
        question: 'What is the name of Mickey Mouse pet?',
        answer1: 'Donald',
        answer2: 'Goofy',
        answer3: 'Pluto',
        correctAnswer: 'Pluto'
    },
    {
        name: 'king',
        url: 'assets/img/king.png',
        question: 'Who is Bruce Wayne?',
        answer1: 'Superman',
        answer2: 'Batman',
        answer3: 'Green Lantern',
        correctAnswer: 'Batman'
    },
    {
        name: 'geography',
        url: 'assets/img/geography1.png',
        question: 'Nova Scotia is part of which country?',
        answer1: 'United States of America',
        answer2: 'United Kingdom',
        answer3: 'Canada',
        correctAnswer: 'Canada'
    },
    {
        name: 'science',
        url: 'assets/img/science1.png',
        question: 'Which of these is NOT a subatomic particle?',
        answer1: 'Leuctron',
        answer2: 'Electron',
        answer3: 'Neutron',
        correctAnswer: 'Leuctron'
    },
    {
        name: 'history',
        url: 'assets/img/history1.png',
        question: 'What was the name of the diplomatic war between USA and USSR?',
        answer1: 'Cold War',
        answer2: 'World War',
        answer3: 'American Revolutionary War',
        correctAnswer: 'Cold War'
    }, 
    {
        name: 'sports',
        url: 'assets/img/sport1.png',
        question: 'Who won Best Player at the 2014 FIFA World Cup held in Brazil?',
        answer1: 'Cristiano Ronaldo',
        answer2: 'Lionel Messi',
        answer3: 'Thomas Müller',
        correctAnswer: 'Lionel Messi',
    },
    {
        name: 'art',
        url: 'assets/img/art1.png',
        question: 'Where is the painting the "Mona Lisa" displayed?',
        answer1: 'Vatican Museums',
        answer2: 'Louvre Museum',
        answer3: 'The Museum Of Modern Art',
        correctAnswer: 'Louvre Museum'
    }
];

const app = {
    
    answers: [],
    init: function() {
        app.changeCoverPage();
        app.setup();
    },

    setup: function () {
        $('.spinner').on('click', app.clickHandler);
        //$('.btn').on('click', app.saveUserAnswer(this));
    },

    changeCoverPage : function() {
        setTimeout(function(){
            //$('#coverPage').addClass("invisible");
            //$('#coverPage').attr('hidden');
            $('#title').removeAttr('hidden');
            $('#roulette').removeAttr('hidden');
        },2500);
    },

    showQuestion: function(character) {
        $('#content').empty();
        let question = `<h3 id="question" class="text-center">${character.question}</h3><br>`
        //let img = `<img src='${character.url}' class='col-sm-5 col-md-3 col-lg-3 img_character'>`
        let answer = `<div class='row justify outside'><img src='${character.url}' class='col-sm-3 col-md-3 col-lg-3 img_character'> \
                        <div class='col-sm-4 col-md-9 col-lg-9 column'><button id='${character.answer1}' class ='btn answer' onclick='app.saveUserAnswer(this)'>${character.answer1}</button> \
                        <button id='${character.answer2}' class ='btn answer' onclick='app.saveUserAnswer(this)'>${character.answer2}</button> \
                        <button id='${character.answer3}' class ='btn answer' onclick='app.saveUserAnswer(this)'>${character.answer3}</button></div></div>`
        $('#content').append(question, answer);
    },
    
    clickHandler: function() {
        $('.spinner').off('click');
        $('.spinner span').hide();
        $r.spin().done(function(character) {
            console.log(character.name);
            $('.spinner').on('click', app.clickHandler);
            $('.spinner span').show();
            app.showQuestion(character);
            console.log(character.question + ' : '+ character.correctAnswer);
            $('#content').removeAttr('hidden');
        });
    },

    saveUserAnswer : function (event) {
        app.answers.push({
            question: event.parentNode.parentNode.parentNode.firstChild.textContent,
            answer: event.textContent            
        });

        app.correctAnswer();
        $('#content').empty();
        console.log(app.answers);
    },

    correctAnswer : function(){
        let length = app.answers.length - 1;
        $.each(character, function (index, value) {
            $.each(app.answers, function(i, v){
                if(app.answers[length].question == value.question){
                    if(app.answers[length].answer == value.correctAnswer){
                        swal('Congrats!','Correct Answer','success');
                        return true;
                    }else{
                        swal('Ooops! Wrong Answer','Keep trying','error');
                        return false;
                    }
                }
            });
        });
    }

}
//$(document).ready(app.init);
//let $r = $('.roulette').fortune(character);


/************************************** */

// the game itself
var game;
// the spinning wheel
var wheel; 
// can the wheel spin?
var canSpin;
// slices (prizes) placed in the wheel
var slices = 7;
// prize names, starting from 12 o'clock going clockwise
//var slicePrizes = ["A KEY!!!", "50 STARS", "500 STARS", "BAD LUCK!!!", "200 STARS", "100 STARS", "150 STARS", "BAD LUCK!!!"];
// the prize you are about to win
var prize;
// text field where to show the prizez
var prizeText;

window.onload = function() {	
     // creation of a 460x490 game
	game = new Phaser.Game(460, 490, Phaser.AUTO, "");
     // adding "PlayGame" state
     game.state.add("PlayGame",playGame);
     // launching "PlayGame" state
     game.state.start("PlayGame");
}

// PLAYGAME STATE
	
var playGame = function(game){};

playGame.prototype = {
     // function to be executed once the state preloads
     preload: function(){
          // preloading graphic assets
        game.load.image("wheel", "ruleta1.png");
		game.load.image("pin", "pin.png");     
     },
     // funtion to be executed when the state is created
  	create: function(){
          // giving some color to background
  		game.stage.backgroundColor = "#808080";
          // adding the wheel in the middle of the canvas
  		wheel = game.add.sprite(game.width / 2, game.width / 2, "wheel");
          // setting wheel registration point in its center
          wheel.anchor.set(0.5);
          // adding the pin in the middle of the canvas
          var pin = game.add.sprite(game.width / 2, game.width / 2, "pin");
          // setting pin registration point in its center
          pin.anchor.set(0.5);
          // adding the text field
          prizeText = game.add.text(game.world.centerX, 400, "");
          // setting text field registration point in its center
          prizeText.anchor.set(0.5);
          // aligning the text to center
          prizeText.align = "center";
          // the game has just started = we can spin the wheel
          canSpin = true;
          // waiting for your input, then calling "spin" function
          game.input.onDown.add(this.spin, this);		
	},
     // function to spin the wheel
     spin(){
          // can we spin the wheel?
          if(canSpin){  
               // resetting text field
               prizeText.text = "";
               // the wheel will spin round from 2 to 4 times. This is just coreography
               var rounds = game.rnd.between(2, 4);
               // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
               var degrees = game.rnd.between(0, 360);
               // before the wheel ends spinning, we already know the prize according to "degrees" rotation and the number of slices
               prize = slices - 1 - Math.floor(degrees / (360 / slices));
               // now the wheel cannot spin because it's already spinning
               canSpin = false;
               // animation tweeen for the spin: duration 3s, will rotate by (360 * rounds + degrees) degrees
               // the quadratic easing will simulate friction
               var spinTween = game.add.tween(wheel).to({
                    angle: 360 * rounds + degrees
               }, 3000, Phaser.Easing.Quadratic.Out, true);
               // once the tween is completed, call winPrize function
               spinTween.onComplete.add(this.winPrize, this);
          }
     },
     // function to assign the prize
     winPrize(){
          // now we can spin the wheel again
          canSpin = true;
          // writing the prize you just won
          prizeText.text = character[prize].name;
     }
}