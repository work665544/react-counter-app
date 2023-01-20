import React, { Component } from "react";

class Basics extends Component {

  state = {
    count: 0,
    // tags: ["tag1", "tag2", "tag3"],
    tags: [],
  };

  /*
  constructor() {
    super()
    this.handleIncrement = this.handleIncrement.bind(this)
  }
  */

  /*
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  */

  render() {
    return (
      <div>

        {/* 
            <img src={this.state.imgUrl} alt="random" /> 
        */}

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={ () => this.handleIncrement({ id: 1 }) }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* 
            {this.state.tags.length === 0 && "Please create a new tag!"}
            {this.renderTags()} 
        */}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (object) => {
    // console.log("Increment Clicked", this);
    // this.state.count += 1
    console.log(object);
    this.setState({ count: this.state.count + 1})
  }

  getBadgeClasses () {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

}

export default Basics;
