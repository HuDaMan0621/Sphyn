import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {colors, utilities} from '../../styleVars';

const {primaryColor, darkColor, secondaryColor, lightColor} = colors;
const {borderRadius, animationSpeed} = utilities;

const showcase = css `
  .showcase {
    background: url("../../public/images/img/showcase.jpg") no-repeat center center/cover;
  }
`
export default function Showcase() {
  return (
      <div css={showcase} className="showcase">
        <img src="./images/showcase.jpg" alt="beautiful home"/>
      </div>
  )
}
