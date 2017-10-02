let character = [
    {
        name: 'enterteiment',
        url: 'assets/img/enterteiment.png',
        question: 'What is the name of Mickey Mouse pet?',
        answer1: 'Donald',
        answer2: 'Goofy',
        answer3: 'Pluto',
        answer: ['Donald', 'Goofy', 'Pluto'],
        correctAnswer: 'Pluto'
    },
    {
        name: 'king',
        url: 'assets/img/king.png',
        question: 'Who is Bruce Wayne?',
        answer1: 'Superman',
        answer2: 'Batman',
        answer3: 'Green Lantern',
        answer: ['Superman', 'Batman', 'Green Lantern'],
        correctAnswer: 'Batman'
    },
    {
        name: 'geography',
        url: 'assets/img/geography1.png',
        question: 'Nova Scotia is part of which country?',
        answer1: 'United States of America',
        answer2: 'United Kingdom',
        answer3: 'Canada',
        answer: ['United States of America', 'United Kingdom', 'Canada'],
        correctAnswer: 'Canada'
    },
    {
        name: 'science',
        url: 'assets/img/science1.png',
        question: 'Which of these is NOT a subatomic particle?',
        answer1: 'Leuctron',
        answer2: 'Electron',
        answer3: 'Neutron',
        answer: ['Leuctron', 'Electron', 'Neutron'],
        correctAnswer: 'Leuctron'
    },
    {
        name: 'history',
        url: 'assets/img/history1.png',
        question: 'What was the name of the diplomatic war between USA and USSR?',
        answer1: 'Cold War',
        answer2: 'World War',
        answer3: 'American Revolutionary War',
        answer: ['Cold War', 'World War', 'American Revolutionary War'],
        correctAnswer: 'Cold War'
    }, 
    {
        name: 'sports',
        url: 'assets/img/sport1.png',
        question: 'Who won Best Player at the 2014 FIFA World Cup held in Brazil?',
        answer1: 'Cristiano Ronaldo',
        answer2: 'Lionel Messi',
        answer3: 'Thomas Müller',
        answer: ['Cristiano Ronaldo', 'Lionel Messi', 'Thomas Müller'],
        correctAnswer: 'Lionel Messi',
    },
    {
        name: 'art',
        url: 'assets/img/art1.png',
        question: 'Where is the painting the "Mona Lisa" displayed?',
        answer1: 'Vatican Museums',
        answer2: 'Louvre Museum',
        answer3: 'The Museum Of Modern Art',
        answer: ['Vatican Museums', 'Louvre Museum', 'The Museum Of Modern Art'],
        correctAnswer: 'Louvre Museum'
    }
];

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      answers: [],
      correctas: 0,
      completo: false,
      comparar: false
    }
  }

    showQuestion (character) {
        $('#content').empty();
        return (
            <div>
                <h3 id="question" className="text-center"> {character[this.state.counter].question} </h3>
                <div className='row justify outside'>
                    <img src={character[this.state.counter].url} className='col-sm-3 col-md-3 col-lg-3 img_character'/>
                    <div className="col-sm-4 col-md-9 col-lg-9 column">
                        {this.answers(preguntas[this.state.counter].opciones)}
                    </div>
                </div>
            </div>
        );
    }

    answers(answer) {
        return Object.keys(answer).map((key, index) => {
        let value = answer[key];
        return (<div>
            <button className='btn answer' key={index} onClick={(e) => this.saveUserAnswer(e.currentTarget, value)}></button>
        </div>);
        })
    }
    
    
  listarRespuestas() {
    return (
      <div id='respuestas'>
        
      </div>
    );

  }
  
  saveUserAnswer(event) {
        app.answers.push({
            question: event.parentNode.parentNode.parentNode.firstChild.textContent,
            answer: event.textContent            
        });

        app.correctAnswer();
        $('#content').empty();
        console.log(state.answers);
    }

    correctAnswer(){
        let length = state.answers.length - 1;
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

    comparar() {
        this.setState({
      comparar: true
        });
    }
    reiniciar(){
        this.setState({
        contar: 0,
        respuestas: [],
        correctas: 0,
        completo: false,
        comparar: false
    });
  }

  render() {
    return (
      <div className="container">
        <div id="wrapper">
            <div id="wheel">
                <div id="inner-wheel">
                    <div className="sec"><span className="fa fa-bell-o"></span></div>
                    <div className="sec"><span className="fa fa-comment-o"></span></div>
                    <div className="sec"><span className="fa fa-smile-o"></span></div>
                    <div className="sec"><span className="fa fa-heart-o"></span></div>
                    <div className="sec"><span className="fa fa-star-o"></span></div>
                    <div className="sec"><span className="fa fa-lightbulb-o"></span></div>
                </div>       
            
                <div id="spin">
                    <div id="inner-spin"></div>
                </div>
                
                <div id="shine"> </div>
            </div>
            <div id="txt"> </div>
        </div>
      </div>);
  }
}


ReactDOM.render(<Application />, document.getElementById('root'));




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
$(document).ready(app.init);
let $r = $('.roulette').fortune(character);