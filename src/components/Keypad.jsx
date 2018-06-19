// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
	enter(){
			console.log('Entering password...')
	}
	render(){
		return (
			<input type ="password" onKeyUp={this.enter}></input>
			)
	}
}

export default Keypad;