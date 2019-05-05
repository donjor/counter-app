import React, { Component } from 'react';

class Counter extends Component {
  // state = {
  //   count: this.props.value,
  // };

  styles = {
    fontSize : 25,
    fontWeight : "bold"
  }

  // constructor(props) {
  //   super(props);
  //   // this.doHandleIncrement = this.doHandleIncrement.bind(this);
  //   this.clearIncrement = this.clearIncrement.bind(this);
  // }

  render() {

    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.props.value}
        </span>

        <button onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2">Increment</button>

        <button onClick={() => this.props.onClear(this.props.counter)}
            className="btn btn-info btn-sm m-2">Clear</button>

          <button onClick={() => this.props.onDelete(this.props.id)}
              className="btn btn-danger btn-sm m-2">Delete</button>


          {/* Commenting in jsx
            <ul>
            {this.renderTags()}
            </ul>

          */}
      </div>
    );
  }
  // doHandleIncrement() {
  //   this.handleIncrement({id:1})
  // }

  // handleIncrement = product => {
  //   // console.log(product)
  //   this.setState({count: this.state.count + 1})
  // }
  //
  // clearIncrement() {
  //   this.setState({count: 0})
  // }


  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.value === 0) ? "warning" : "primary"
    return classes
  }

}
export default Counter;
