import React, { Component } from 'react';
import { connect } from 'react-redux';
class AnimalForm extends Component {
  state = {
    speciesInput: '',
    classInput: '',
  };
  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
    console.log(this.state);
  };

  handleSaveClick = () => {
    this.props.dispatch({
      type: 'ADD_ANIMAL',
      payload: this.state,
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.onInputChange('speciesInput')}
          placeholder="Enter animal species"
        ></input>
        <input
          onChange={this.onInputChange('classInput')}
          placeholder="Enter animal class"
        ></input>
        <button onClick={this.handleSaveClick}>Save New Animal</button>
      </div>
    );
  }
}

export default connect()(AnimalForm);
