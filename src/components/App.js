import React, { Component } from "react";
import GlobalStyle from "./GlobalStyle";
import Name from "./Name";
import Clock from "./Clock";

class App extends Component {
  state = {
    name: null,
  };
  saveName = (data) => {
    this.setState({
      name: data,
    });
    localStorage.setItem("NAME", data);
  };
  getName = () => {
    const name = localStorage.getItem("NAME");
    if (name !== null) {
      this.setState({
        name,
      });
    }
  };
  render() {
    const { name } = this.state;
    return (
      <>
        <GlobalStyle />
        {name === null ? (
          <Name saveName={this.saveName} />
        ) : (
          <>
            <Clock name={name} />
          </>
        )}
      </>
    );
  }
}

export default App;
