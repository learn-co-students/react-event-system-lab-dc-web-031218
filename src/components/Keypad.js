// Code Keypad Component Here
import React from "react";

class Keypad extends React.Component {
  passwordEvent = e => {
    console.log("Entering password...");
  }

  render () {
    return (
      <input type="password" onKeyUp={this.passwordEvent}/>
    )
  }
}

export default Keypad;
