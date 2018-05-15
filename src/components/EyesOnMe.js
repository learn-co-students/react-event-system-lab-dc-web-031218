// Code EyesOnMe Component Here
import React from "react";

class EyesOnMe extends React.Component {
  focusEvent = e => {
    console.log("Good!")
  }

  blurEvent = e => {
    console.log('Hey! Eyes on me!');
  }

  render () {
    return (
      <button onFocus={this.focusEvent} onBlur={this.blurEvent} />
    )
  }
}

export default EyesOnMe;
