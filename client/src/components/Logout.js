import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors, utilities } from '../styleVars';
import { Redirect } from 'react-router-dom';
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

export default class Logout extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      redirect: false
    }
  }
  
  render() {
    return (
      <div css={header} className='header'>
        {this.state.redirect && <Redirect to="/"/>}
        <header>
          <h1>Sphyn</h1>
          <div className="user-links">
            <button onClick={() => {
              fetch('/api/v1/logout');
              this.setState({ redirect: true })
            }}>logout</button>
          </div>
        </header>
      </div>
    )
  }
}
