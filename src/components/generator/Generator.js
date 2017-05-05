//Import libs and styles
import React, { Component } from 'react';
import './Generator.css';

//import data
import adjectives from '../../../data/json/adjectives.json';
import nouns from '../../../data/json/nouns.json';

//Random helper function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//Generator component
class Generator extends Component {

  constructor(props) {
    super(props)

    //Set an empty message
    this.state = {message: <p></p>}

    //Set up event management
    this.buttonClick = this.buttonClick.bind(this)

  }

  //Render the generated message
  renderMessage(adjective, noun) {
    return (
        <p>The project should be named <br></br><u>{adjective}-{noun}</u></p>
    );
  }

  //Check if user clicked main button
  buttonClick() {

      //Retrieve random adjective
      let adjective = adjectives.adjs[getRandomInt(0, adjectives.adjs.length)]
      
      //Retrieve random noun
      let noun = nouns.nouns[getRandomInt(0, nouns.nouns.length)]


      //Generate random message and push it to application state
      this.setState({
          message: this.renderMessage(adjective, noun)
      })

  }

  //Render all the code

  render() {
      
    return (
      <div className = "generator">    
        <div className = "generator-message">{this.state.message}</div>
        <button className = "btn btn-primary btn-block" onClick = {this.buttonClick}>
            Generate
        </button>

      
      </div>
    );
  }
}

export default Generator;
