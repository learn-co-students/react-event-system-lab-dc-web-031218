// Code EyesOnMe Component Here
import React from "react";

export default class EyesOnMe extends React.Component {
  blurIt = () => console.log("Hey! Eyes on me!");
  focusIt = () => console.log("Good!");

  render() {
    return (
      <button onBlur={this.blurIt} onFocus={this.focusIt}>
        Button
      </button>
    );
  }
}
