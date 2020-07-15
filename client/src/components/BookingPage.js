import React, { Component } from 'react'

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors, utilities } from '../styleVars';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

const { primaryColor, darkColor, secondaryColor, lightColor } = colors;
const { borderRadius, animationSpeed } = utilities;

const packages = css`
.Packages-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 0 2rem;
    justify-content: end;
    
}

    .package {
        border: 1px solid ${lightColor};
        border-radius: ${borderRadius};
    }

    .heading {
        background-color: ${darkColor};
        color: ${lightColor}
    }

    .price {
        border-bottom: 1px solid ${lightColor};
        font-size: 3em;
    }

    .details {
        //  background-color: ${lightColor};
        text-align: left;
        // color: ${secondaryColor};
        padding: 1rem .5rem;

        li {
            padding: .5rem 0;
        }
        
    }

    h1 {
        margin: 1rem 0;
    }

`

export default class BookingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nick_name: '',
            sq_ft: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            price: '',
            submitted: false,
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/booking', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(res => {
                if (res.ok === false) {
                    this.props.history.push(`/login`)
                }
                else {
                    this.setState({ submitted: true })
                }
            })
    }

    handleChange = async (e) => {
        const { name, value } = e.target;
        await this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>{
                ! this.state.submitted ? (
                    <div>
                        <form onSubmit={this.handleFormSubmit}  >
                            <label htmlFor="nick_name">Nick Name<input className="nickName" name="nick_name" placeholder="My First House" onChange={this.handleChange} value={this.state.nick_name}></input></label>
                            <label htmlFor="sq_ft">Size of the Property in Square Foot<input className="sq_ft" name="sq_ft" placeholder="Square Foot of the House" onChange={this.handleChange} value={this.state.sq_ft}></input></label>
                            <label htmlFor="address"><input className="address" name="address" placeholder="Address of the house needs 3D service" onChange={this.handleChange} value={this.state.address}></input></label>
                            <label htmlFor="city"><input className="city" name="city" placeholder="City" onChange={this.handleChange} value={this.state.city}></input></label>
                            <label htmlFor="state"><input className="state" name="state" placeholder="State" onChange={this.handleChange} value={this.state.state}></input></label>
                            <label htmlFor="zipcode"><input className="zipcode" name="zipcode" placeholder="Zip Code" onChange={this.handleChange} value={this.state.zipcode}></input></label>
                            <label htmlFor="price">
                                <select name="price" onChange={this.handleChange} value={this.state.price} className={this.state.className} required>
                                    <option className="packageEmpty" value="" disabled>Please Select a Package</option>
                                    <option className="package1" value="150">Package 1 $150</option>
                                    <option className="package2" value="300">Package 2 $300</option>
                                    <option className="package3" value="500">Package 3 $500</option>
                                </select>
                            </label>
                            <button className="submit" type="submit">Click Here To Pay</button>
                        </form >
                        < div css={packages} >
                            <h1>Packages</h1>
                            <div className='Packages-wrapper'>
                                <div className="package">
                                    <div className="heading">
                                        <h3>Test Package Title</h3>
                                        <p>These are some test package details</p>
                                    </div>
                                    <div className="price">$150</div>
                                    <div className="details">
                                        <ul>
                                            <li>Test bullet</li>
                                            <li>Test bullet</li>
                                            <li>Test bullet</li>
                                            <li>Test bullet</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="package">
                                    <div className="heading">
                                        <h3>Test Package Title</h3>
                                        <p>These are some test package details</p>
                                    </div>
                                    <div className="price">$300</div>
                                    <div className="details">
                                        <ul>
                                            <li>Test bullet</li>
                                            <li>Test bullet</li>
                                            <li>Test bullet</li>
                                            <li>Test bullet</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="package">
                                    <div className="heading">
                                        <h3>Test Package Title</h3>
                                        <p>These are some test package details</p>
                                    </div>
                                    <div className="price">$500</div>
                                    <div className="details">
                                        <ul>
                                            <li>Test bullet</li>
                                            <li>Test bullet</li>
                                            <li>Test bullet</li>
                                            <li>Test bullet</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div ></div>) : <Checkout nick_name={this.state.nick_name} price={this.state.price} />
            } </div>
        )
    }
}
