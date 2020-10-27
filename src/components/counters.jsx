import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //object distructioning

  render() {
    const { counters, onDelete, onIncrement } = this.props;
    console.log("Counters is rendering");

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
