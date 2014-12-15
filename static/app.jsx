/** @jsx React.DOM */

var QuizWidget = React.createClass({
  getInitialState: function(){
    return {score: 0};
  },

  handleSubmit: function(answerSum){
    this.setState({score: answerSum})
  },

  render: function() {
    var state = <QuizQuestions submit={this.handleSubmit} />;
    if (this.state.score > 64){
      state = <Answer_65 />;
    } else if (this.state.score > 48){
      state = <Answer_49 />;
    } else if (this.state.score > 32) {
      state = <Answer_33 />;
    } else if (this.state.score > 0) {
      state = <Answer_16 />;
    };
    return (
            <div>
             {state}
            </div>
    );
  }
});

var QuizQuestions = React.createClass({
  getInitialState: function(){
    return {answers: []};
  },
  
  handleChange: function(event){
    var newAnswers = this.state.answers;
    newAnswers[parseInt(event.target.name) - 1] = parseInt(event.target.value);
    this.setState({answers: newAnswers});
  },

  handleClick: function(event){
    var answerSum = this.state.answers.reduce(function(previousValue, currentValue){return previousValue + currentValue});
    this.props.submit(answerSum)
  },

  enoughAnswers: function(){
    return this.state.answers.length == 16;
  },

  render: function(){
    var Glyphicon = ReactBootstrap.Glyphicon;
    var Input = ReactBootstrap.Input;
    var Button = ReactBootstrap.Button;
    var buttonText = this.enoughAnswers() ? "Submit" : "Please answer all questions";
    var disabled = !this.enoughAnswers()
    return (
        <div>
          <div className="scale">
            <span style={{color: "#FF0033"}}>Disagree</span> &lt;---------&gt; <span style={{color: "#00CC00"}}>Agree</span>
          </div>
            <br />
            <br />
          <div className="question">
            Do you often feel the pain of others?

            <div className="options">
              <input onChange={this.handleChange} name=" 1" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 1" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 1" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 1" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 1" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            You can pick up quickly if someone says one thing but means another.

            <div className="options">
              <input onChange={this.handleChange} name=" 2" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 2" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 2" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 2" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 2" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            You feel drained after being around certain people for too long.

            <div className="options">
              <input onChange={this.handleChange} name=" 3" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 3" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 3" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 3" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 3" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            You feel the same sensation or emotion around a specific person repeatedly.

            <div className="options">
              <input onChange={this.handleChange} name=" 4" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 4" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 4" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 4" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 4" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            Being around certain people makes you feel sick.

            <div className="options">
              <input onChange={this.handleChange} name=" 5" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 5" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 5" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 5" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 5" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            Your mood changes depending on who walks in the room.

            <div className="options">
              <input onChange={this.handleChange} name=" 6" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 6" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 6" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 6" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 6" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            You get overwhelmed in situations where there are many people around.

            <div className="options">
              <input onChange={this.handleChange} name=" 7" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 7" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 7" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 7" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 7" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            Emotions can be confusing -- one minute you were feeling normal and <br /> the next you're feeling something else entirely and you don't understand why.

            <div className="options">
              <input onChange={this.handleChange} name=" 8" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 8" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 8" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 8" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 8" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            You can influence the moods of those around you.

            <div className="options">
              <input onChange={this.handleChange} name=" 9" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 9" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 9" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 9" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 9" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            Have you ever spent a lot of time with a person and noticed yourself <br />talking or acting like them?

            <div className="options">
              <input onChange={this.handleChange} name=" 10" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 10" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 10" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 10" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 10" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            People come to you when they have a problem.

            <div className="options">
              <input onChange={this.handleChange} name=" 11" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 11" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 11" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 11" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 11" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            The energy of the ocean, forest, or nature is preferable to the city.

            <div className="options">
              <input onChange={this.handleChange} name=" 12" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 12" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 12" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 12" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 12" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            You have to be near water.

            <div className="options">
              <input onChange={this.handleChange} name=" 13" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 13" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 13" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 13" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 13" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            You feel physically or emotionally ill when seeing violent <br /> images in movies or on TV.

            <div className="options">
              <input onChange={this.handleChange} name=" 14" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 14" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 14" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 14" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 14" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            You find yourself caring for or taking care of others <br /> more than yourself sometimes.

            <div className="options">
              <input onChange={this.handleChange} name=" 15" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 15" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 15" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 15" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 15" type="radio" value="5" />
            </div>
          </div>

          <br />

          <div className="question">
            Plants and animals have consciousness.

            <div className="options">
              <input onChange={this.handleChange} name=" 16" type="radio" value="1" />
              <input onChange={this.handleChange} name=" 16" type="radio" value="2" />
              <input onChange={this.handleChange} name=" 16" type="radio" value="3" />
              <input onChange={this.handleChange} name=" 16" type="radio" value="4" />
              <input onChange={this.handleChange} name=" 16" type="radio" value="5" />
            </div>
          </div>
          <br />
          <Button onClick={this.handleClick} disabled={disabled}>{buttonText}</Button>
        </div>
    );
  }
});

var Answer_16 = React.createClass({
  render: function(){
    return (
        <div>
          "You scored fairly low on the overall results. It is unlikely that you are an empath."
          <br /><br />You have trouble determining when people's words and feelings are in alignment. You don't need to be near water which means your second chakra is probably doing well. You like the hustle and bustle of the city! This is highly unusual for empaths! You are indifferent to animals and plants. You would benefit from meditating in the forest. But you are currently unable to influence other people. You might want to read some psychology books.
          <br /><br />You are not effected by other people's emotions. You are your own person. You are strong and grounded. This means that you tend not to mirror other people around you or get tripped up by their energy or problems.
          <br /><br />Either you are completely unaware of other people's energy or you are a master at using your empathic abilities. Have you been to a psychic school? Congrats! You've got your healing energy under control!
          <br /> <br />
        </div>
    )
  }
});

var Answer_33 = React.createClass({
  render: function(){
    return (
        <div>
          You scored toward the middle of the scale on the overall results. It is possible you have some empathic abilites, which could be further developed with practice and commitment.
          <br /><br />You have trouble determining when people's words and feelings are in alignment. You may want to look into getting energy work and healing done on your second chakra. Usually people that need to be around water all the time have blocks in their second chakras. You like the hustle and bustle of the city! This is highly unusual for empaths! You have a deep love and appreciation for nature. You recognize the sacred expression of all beings. You are truly wise. But you are currently unable to influence other people. You might want to read some psychology books.
          <br /><br />You are not effected by other people's emotions. You are your own person. You are strong and grounded. This means that you tend not to mirror other people around you or get tripped up by their energy or problems.
          <br /><br />You're pretty good about keeping other people and their troubles out of your inner space! Great job! Hmm. Looks like you may need to take a look at who you are healing unconsciously...
          <br /> <br />
        </div>
    )
  }
});

var Answer_49 = React.createClass({
  render: function(){
    return (
        <div>
          You scored pretty high on the overall results. It is highly likely that you are an empath.
          <br /><br />You have trouble determining when people's words and feelings are in alignment. You may want to look into getting energy work and healing done on your second chakra. Usually people that need to be around water all the time have blocks in their second chakras. You love nature and unconsciously understand its healing effects -- which is a general, but strong indicator that you are an empath. You have a deep love and appreciation for nature. You recognize the sacred expression of all beings. You are truly wise. But you have a wonderful ability to sway and change the moods, energies, atmospheres, and environments around you.
          <br /><br />You are your own person, other people's energy doesn't effect you. Once in a while you mirror the energy of people around you, but for the most part you are your own person. Great job.
          <br /><br />You're pretty good about keeping other people and their troubles out of your inner space! Great job! You are a wonderful and loving person. You are also what is known as an "out of control healer!" You would benefit immensely from energy work and empathic tools for releasing guilt and responsibility.
          <br /> <br />
        </div>
    )
  }
});

var Answer_65 = React.createClass({
  render: function(){
    return (
        <div>
          You scored extremely high on the overall results. You are definitely an empath.
          <br /><br />You have trouble determining when people's words and feelings are in alignment. You may want to look into getting energy work and healing done on your second chakra. Usually people that need to be around water all the time have blocks in their second chakras. You love nature and unconsciously understand its healing effects -- which is a general, but strong indicator that you are an empath. You have a deep love and appreciation for nature. You recognize the sacred expression of all beings. You are truly wise. But you have a wonderful ability to sway and change the moods, energies, atmospheres, and environments around you.
          <br /><br />You need to learn how to recognize and differentiate other people's energy from yours. Learning psychic/empathic meditation tools will help. You scored fairly poor on the "Mirroring Others Unconsciously" portion of the quiz. It looks like you have a tendency to mirror other people and their energy. Your score indicates that you would benefit from learning to run energy, ground yourself, and protect your aura.
          <br /><br />You scored toward the middle on the "Has Protection Tools" section of the quiz. This means that sometimes other people's energy gets into your aura and body, but you mostly have things under control. Good Job. You are a wonderful and loving person. You are also what is known as an "out of control healer!" You would benefit immensely from energy work and empathic tools for releasing guilt and responsibility.
          <br /> <br />
        </div>
    )
  }
});

React.renderComponent(
  <QuizWidget></QuizWidget>,
  document.getElementById('app')
);