import React, { Component } from "react";
import data from './data'
import Button from "./Button";
import Container from './Container'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      list: [...data],
      current: 0
    };
  }

  handlePrevious = e => {
    if (this.state.current === 0) {
      this.setState({
        current: this.state.list.length - 1
      });
    } else {
      this.setState({
        current: this.state.current - 1
      });
    }
  };

  handleNext = e => {
    if (this.state.current === this.state.list.length - 1) {
      this.setState({
        current: 0
      });
    } else {
      return this.setState({
        current: this.state.current + 1
      });
    }
  };

  render() {
    return (
      <div>
        <header className="header">
          <h3>Home</h3>
        </header>

        <Container current={this.state.current} list={this.state.list} />

        <Button next={this.handleNext} previous={this.handlePrevious} />
      </div>
    );
  }
}

export default Home;