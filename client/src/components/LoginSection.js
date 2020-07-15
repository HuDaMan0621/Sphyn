import React, { Component } from 'react';
// import ProfilePage from './ProfilePage';
// import QRCode from 'qrcode.react';
import axios from 'axios';

export default class LoginSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            login_password: '',
            data: {},
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/v1/login', {
            ...this.state,
        }).then(res => {
            this.setState({ data: res.data })
            this.props.history.push(`/customer/profile`)
        })
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
                    <input htmlFor="email" className="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}></input>
                    <label htmlFor="loginPassword"><input className="loginPassword" name="login_password" placeholder="Password" onChange={this.handleChange} value={this.state.login_password}></input></label>
                    <button className="submit" type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}