import React, { Component } from 'react';

import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

  state = {
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 4 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructure");
  }

  componentDidMount() {
    // It is useful to make ajax call to get data from server.
    // And then call this.setState({}) to update the state data.
    console.log("App - Mounted");
  }

  handleRest = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })

    this.setState({ counters })
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }

  handleIncrement = counterId => {
    
    const counters = [...this.state.counters]
    const index = counters.indexOf(counters.find(c => c.id === counterId))

    counters[index].value += 1
    this.setState({ counters })
  }

  handleDecrement = counterId => {
    
    const counters = [...this.state.counters]
    const index = counters.indexOf(counters.find(c => c.id === counterId))

    if (counters[index].value > 0) {
      counters[index].value -= 1
      this.setState({ counters })
    }
  }

  render() {
    console.log("App - Render");
    return (
      <>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onReset={this.handleRest} 
            onDelete={this.handleDelete} 
          />
        </main>
      </>
    );
  }
}

export default App;
