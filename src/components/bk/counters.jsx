import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 5 },
    ],
  };

  handleAdd() {
    const counters = JSON.parse(JSON.stringify(this.state.counters));
    counters.push({ id: 5, valule: 0 });

    // const counters = this.state.counters;
    this.setState({ counters });
    // console.log(this.state.counters);
  }

  handleDelete = (counter) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== counter.id),
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Reset method called");

    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <button onClick={this.handleAdd} className="btn btn-success btn-sm m-2">
          Add
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
