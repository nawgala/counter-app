import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   console.log("Constructor: ", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // state = {
  //   value: this.props.counter.value,
  //   tags: [],
  // };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  //   console.log("Incrementing the counter:", this.state.value);
  // };

  render() {
    // console.log("prop", this.props);
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.fomatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags == 0 && "Please enter tags"}
        {this.renderTags()} */}
      </div>
    );
  }

  // renderTags() {
  //   if (this.state.tags === 0) {
  //     // return null;
  //     return <p>No Tagas are available</p>;
  //   } else {
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    // console.log(classes);
    return classes;
  }

  fomatCount() {
    const { value } = this.props.counter;
    // const zero = <h1>Zero</h1>;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
