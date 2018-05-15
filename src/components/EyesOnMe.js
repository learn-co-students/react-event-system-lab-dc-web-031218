import React from 'react';
// Code EyesOnMe Component Here
class EyesOnMe extends React.Component{
	constructor(props){
		super(props);
	}

	focusHandler = () =>{
		console.log('Good!');
	}

	blurHandler = () =>{
		console.log('Hey! Eyes on me!');
	}

	render(){
		return(
			<button onFocus={this.focusHandler}
			 		onBlur={this.blurHandler}>
				Eyes On Me!!!
			</button>
		)
	}

}

export default EyesOnMe;