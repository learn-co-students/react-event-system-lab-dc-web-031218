import React from 'react';
// Code Keypad Component Here
class Keypad extends React.Component{
	constructor(props){
		super(props);

	}

	passwordHandler = (e) =>{
		console.log('Entering password...');
		// console.log(e.target);
	}

	render(){
		return(
			<input type="password" onKeyUp={this.passwordHandler}/>
		)
	}
}

export default Keypad;