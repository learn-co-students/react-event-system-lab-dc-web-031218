import React from "react";

class EyesOnMe extends React.Component {
  constructor() {
    super();
  }

  blurry() {
    console.log("Hey! Eyes on me!");
  }

  focused() {
    console.log("Good!");
  }

  render() {
    return <button onFocus={this.focused} onBlur={this.blurry} />;
  }
}

export default EyesOnMe;
