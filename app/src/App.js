import React, { Component } from 'react';
import logo from './logo.svg';
import { Input, Container, Button } from 'semantic-ui-react';

import './App.css';

class App extends Component {
  state = {
    isLoading: false,
    text: ''
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.text);
  };

  handleSubmit = event => {
    console.log('submitted', this.state);


  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Container fluid>
             <h1>  Insert text </h1>
             <Input name='text' loading icon='user' placeholder='Add text here...' onChange={this.handleInputChange}/>
             <Button onClick={this.handleSubmit}>Analyse</Button>
        </Container>

      </div>
    );
  }
}

export default App;
