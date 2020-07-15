import React, { Component } from 'react'
import PayPalButton from './Paypal/PayPalButton';
import PayPalButton2 from './Paypal/PayPalButton';
import PayPalButton3 from './Paypal/PayPalButton';
import { Link } from 'react-router-dom';
// import BookingPage from './BookingPage';
// import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors, utilities } from '../styleVars';

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
//! can't pass the props from BookingPage
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {console.log('line 75 ')}
                {/* <h1>{this.props.nick_name}{this.props.price}</h1> */}
                <h1>Please Review before Paying!</h1>
                <div css={packages} >
                    {/* <h1>Packages</h1> */}
                    <div className='Packages-wrapper'>
                        <div className="package1">
                            <div className="heading">
                                <h3>Nick Name: {this.props.nick_name}</h3>
                                <p>Price $ {this.props.price}</p>
                            </div>
                            <div className="price"></div>
                            <div className="details">
                                <ul>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                </ul>
                            </div>
                            <PayPalButton price={this.props.price}/>  {/* turnary operation to show payment buttons 1 2 or 3 depends on the price */}
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}


// Checkout.propTypes = {
//     nick_name: PropTypes.string,
//     price: PropTypes.number
// };

export default Checkout;
