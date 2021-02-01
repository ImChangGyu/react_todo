import React, { Component } from "react";
import ClockPresenter from "./ClockPresenter";

class ClockContainer extends Component {
  state = {
    time: "",
    greeting: "",
  };
  getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = `${hour > 9 ? hour : `0${hour}`}:${
      minute > 9 ? minute : `0${minute}`
    }`;
    this.setState({
      time,
    });
    if (hour >= 5 && hour < 12) {
      this.setState({
        greeting: "Good Morning",
      });
    } else if (hour >= 12 && hour < 17) {
      this.setState({
        greeting: "Good Afternoon",
      });
    } else {
      this.setState({
        greeting: "Good Evening",
      });
    }
  };
  componentDidMount() {
    setInterval(this.getTime, 1);
  }
  render() {
    const { time, greeting } = this.state;
    const { name } = this.props; // App.js에서 전달받은 name값
    return <ClockPresenter name={name} time={time} greeting={greeting} />;
  }
}

export default ClockContainer;
