
import React, { Component } from 'react'  

export default class RegisterSection extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '@email.com',
        login_password: '',
        phone_number: '',
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/customer', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
        this.props.history.push('/login')
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="firstName">First Name<input className="firstName" name="first_name" placeholder="First name" onChange={this.handleChange} value={this.state.first_name}></input></label>
                        <label htmlFor="lastName">Last Name<input className="lastName" name="last_name" placeholder="Last name" onChange={this.handleChange} value={this.state.last_name}></input></label>
                        <label htmlFor="email"><input className="email" name="email" placeholder="Email@Email.com" onChange={this.handleChange} value={this.state.email}></input></label>
                        <label htmlFor="loginPassword"><input type="password" name="login_password" className="loginPassword" placeholder="Password" onChange={this.handleChange} value={this.state.login_password}></input></label>
                        <label htmlFor="phoneNumber"><input className="phoneNumber" name="phone_number" placeholder="Phone Number" onChange={this.handleChange} value={this.state.phone_number}></input></label>
                            <button className="submit" type="submit">Submit</button>
                    </form>
            </div>
        )
    }
}

