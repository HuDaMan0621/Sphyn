import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors, utilities } from '../../styleVars';
import { Link } from 'react-router-dom';

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

export default function Packages() {
    return (
        <div css={packages} >
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
                    <Link to="/login">Returning User Book Now</Link>
                    <Link to="/register">New User Book Now</Link>
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
                    <Link to="/login">Returning User Book Now</Link>
                    <Link to="/register">New User Book Now</Link>
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
                    <Link to="/login">Returning User Book Now</Link>
                    <Link to="/register">New User Book Now</Link>
                </div>
            </div>
        </div >
    )
}
