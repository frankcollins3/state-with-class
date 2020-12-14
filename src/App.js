import './App.css';
import React, { Component } from 'react';
import './sass/style.scss'

class App extends Component {
constructor() {
  super()
  this.state = {
    count: 0
  }
}

increment = () => {
  const currentCount = this.state.count;
  const newCount = currentCount + 1;

  this.setState({ count: newCount })
}
/* One Way to Write Function */
// decrement = () => {
//   const currentCount = this.state.count;
//   const newCount = currentCount - 1;

//   this.setState({ count: newCount })
// }

//destructuring code.
decrement = () => {
  this.setState({ count: this.state.count - 1})
}

  render() {
    return(
      <div className="counter_container">
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default App;