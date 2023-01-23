import React, { Component } from "react";

class Counter extends Component {

  getFormattedCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  isCounterValueZero() {
    return this.props.counter.value === 0 ? true: false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUpdate() {
    // this method is call just before the component is removed from the DOM.
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        &nbsp;
        <span className={this.getBadgeClasses()}>
          {this.getFormattedCount()}
        </span>
        &nbsp;
        <button
          onClick={() => this.props.onDecrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm" disabled={this.isCounterValueZero()}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
