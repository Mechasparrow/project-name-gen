//Import libs and styles
import React, { Component } from 'react';
import './Generator.css';

//import data
import adjectives from '../../../data/json/adjectives.json';
import nouns from '../../../data/json/nouns.json';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//Generator component
class Generator extends Component {

  constructor(props) {
    super(props)

    this.state = {message: <p></p>}

    console.log(this.state)

    this.buttonClick = this.buttonClick.bind(this)

  }

  /**renderMessage(market, feature) {
      return (
        <p>The startup offers <u>{feature}</u> for <u>{market}</u></p>
      );
  }**/

  renderMessage(adjective, noun) {
    return (
        <p>The project should be named <br></br><u>{adjective}-{noun}</u></p>
    );
  }

  buttonClick() {

      //let feature = features[getRandomInt(0, features.length)].Feature
      //let market = markets[getRandomInt(0, markets.length)].Market
      
      let adjective = adjectives.adjs[getRandomInt(0, adjectives.adjs.length)]
      let noun = nouns.nouns[getRandomInt(0, nouns.nouns.length)]


      this.setState({
          message: this.renderMessage(adjective, noun)
      })
  }

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
