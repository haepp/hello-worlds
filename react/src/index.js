import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class MyForm extends React.Component {
    render() {
      return (
        <form>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input
            type="text"
          />
        </form>
      );
    }
  }
  ReactDOM.render(<MyForm />, document.getElementById('root'));