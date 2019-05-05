import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {

  state = {
    counters: [
      {id: 0, value: 0},
      {id: 1, value: 1},
      {id: 2, value: 2},
      {id: 3, value: 3},
      {id: 4, value: 4}
    ]
  }

  constructor(props) {
    super(props);
    // this.doHandleIncrement = this.doHandleIncrement.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  handleDelete = (counterId) => {
    // console.log("Event Handler Called", counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters})

  }

  handleIncrement = (counter) => {
    // console.log("Event Handler Called - CounterID:", counterId)
    const counters = [...this.state.counters]
    const i = counters.indexOf(counter)
    counters[i].value++
    this.setState({counters})
  }

  handleClear = (counter) => {
    // console.log("Event Handler Called", counterId)
    const counters = [...this.state.counters]
    const i = counters.indexOf(counter)
    counters[i].value = 0
    this.setState({counters})

  }

  clearAll(){
    // console.log('reached')
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c;
    })
    this.setState({counters})
  }

  render() {
    return (
      <div>
        <button onClick={this.clearAll}
          className="btn btn-info btn-lg m-2">CLEAR ALL</button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onClear={this.handleClear}
            value={counter.value}
            id={counter.id}
            counter={counter}/>

        ))}
      </div>
    );
  }

}

export default Counters;
