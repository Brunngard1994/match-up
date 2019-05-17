import React, { Component } from 'react';



import {

	withRouter

} from 'react-router-dom';



class ContactForm extends Component {



	submitForm (e) {

		e.preventDefault()

		this.props.history.push('/thank-you');

	}



	render() {

		return (

			<div>

				<form onSubmit={this.submitForm.bind(this)}>

					<button type="submit">Submit</button>

				</form>

			</div>

		)



	}

}

export default withRouter(ContactForm);