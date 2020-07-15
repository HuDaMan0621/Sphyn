import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors, utilities } from '../../styleVars';
import Logout from '../Logout';
import { Link } from 'react-router-dom';

const { primaryColor, darkColor, secondaryColor, lightColor } = colors;
const { borderRadius, animationSpeed } = utilities;

const header = css`
  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    color: ${darkColor};
    align-items: center;

    .user-links {
      a {
        color: ${darkColor};
        padding: 0 0.5rem;
        transition: all ${animationSpeed} ease-in-out;

        &:hover {
          color: ${primaryColor};
        }
      }
    }
  }
`

//! we need a state to know if we are login or not
//! a hook useEffect? set if "logged in" to true 
//

export default function Header() {
  return (
    <div css={header} className='header'>
      <header>
        <h1>Sphyn</h1>
        <div className="user-links">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </header>
    </div>
  )
}
