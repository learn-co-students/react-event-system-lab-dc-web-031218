import React from "react";

class Keypad extends React.Component {
  constructor() {
    super();
  }

  handlekey() {
    console.log("Entering password...");
  }

  render() {
    return <input onKeyUp={this.handlekey} type="password" />;
  }
}

export default Keypad;
