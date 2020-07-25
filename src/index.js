import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './calculator.css'
import * as serviceWorker from './serviceWorker';

class Button extends React.Component {
  renderButton(i){
    return <Counter value={i} />
  }
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  handleClick(i){
    let currentCount = this.state.value
    currentCount += 1

    var msg = new SpeechSynthesisUtterance();
    msg.text = currentCount;
    msg.lang = 'ja-JP';
    window.speechSynthesis.speak(msg);

    this.setState({value: currentCount})
  }

  handleReset(i){
    var msg = new SpeechSynthesisUtterance();
    msg.text = 'リセットしました。';
    msg.lang = 'ja-JP';
    window.speechSynthesis.speak(msg);

    this.setState({value: 0})
  }

  render() {
    return(
      <div>
        {this.renderButton(this.state.value)}
        <div className="button" onClick={() => this.handleClick()}>PUSH!!</div>
        <div className="reset" onClick={() => this.handleReset()}>RESET</div>
      </div>
    )
  }
}

class Counter extends React.Component {
  render() {
    return (
      <div className="display">
        <p>現在の回数…</p>
        {this.props.value}<span>回</span>
      </div>
    )
  }
}

class Calculator extends React.Component {
  render() {
    return(
      <div className="calculator">
        <Button />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
