import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.getFormattedCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 });
  }

  getFormattedCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
