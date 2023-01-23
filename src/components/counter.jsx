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

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.getFormattedCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
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
