import React, { Component } from 'react';
import './App.scss';

const ALPHABET = [...Array(26).keys()].map(i => String.fromCharCode(i + "A".charCodeAt(0)));

export default class CipherForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listLetter: 'A',
      listFirstNumber: 1,
      listSecondNumber: 27,
      listThirdNumber: 53,
      listFourthNumber: 79,
      textbox: '',
      cipherValue: '',
      cipherComputed: false,
    }
  }

  onSubmit = (event) => {
    this.setState({[event.target.name]: event.target.value}); // Universal setting of this.state.*

    event.preventDefault(); // Self Explanitory IMO

    const textToEncrypt = this.state.textbox.toUpperCase().split("");
    let cipherValue = parseInt(this.state.listFirstNumber, 10); // Default value

    let newText = textToEncrypt.map(txtChar => {
        // Checks the position and changes the cipherValue based on if it is in position [1, 2, 3, 4, 1, 2, 3, 4,...]
        //TODO: Make this random.
        switch(textToEncrypt.indexOf(txtChar) % 4) {
          case 0:
            cipherValue = parseInt(this.state.listFirstNumber, 10);
            break;
          case 1:
            cipherValue = parseInt(this.state.listSecondNumber, 10);
            break;
          case 2:
            cipherValue = parseInt(this.state.listThirdNumber, 10);
            break;
          case 3:
            cipherValue = parseInt(this.state.listFourthNumber, 10);
            break;
          default:
            cipherValue = parseInt(this.state.listFirstNumber, 10);
            break;
        }

      if (ALPHABET.includes(txtChar)) {
        return parseInt(ALPHABET.indexOf(txtChar) + 2, 10) + cipherValue + " "
      } else {
        return txtChar + " ";
      }
    });
    
    this.setState({
      cipherValue: newText,
      cipherComputed: true,
    });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  calculateOffset(start, end) {
    const numbers = []
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  render() {
    return (
      <div>
        <form>
          <div className="txtArea-wrapper">
            <label className="txtarea-label" htmlFor="Text">Enter your text here</label>
            <br/>
            <textarea id="Text" className="materialize-textarea" type="text" name="textbox" value={this.state.value} onChange={this.handleChange}></textarea>
          </div>
          <br/>
          <div className="numSelect-wrapper">
            <label htmlFor="Number">Enter offsets from 0 - 99</label>
            <br/>
            <input type="number" min="0" max="99" maxLength="2" id="firstNumber" name="listFirstNumber" onChange={this.handleChange}/>
            <input type="number" min="0" max="99" maxLength="2" id="secondNumber" name="listSecondNumber" onChange={this.handleChange}/>
            <input type="number" min="0" max="99" maxLength="2" id="thirdNumber" name="listThirdNumber" onChange={this.handleChange}/>
            <input type="number" min="0" max="99" maxLength="2" id="fourthNumber" name="listFourthNumber" onChange={this.handleChange}/>
          </div>
          <br/>
          <button className="small-btn mdc-button mdc-button--raised" onClick={this.onSubmit}>Encrypt</button>
        </form>

        {this.state.cipherComputed ? (
          <h1 className="Large-letters ">{this.state.cipherValue}</h1>) : null}
      </div>
    );
  } 
}