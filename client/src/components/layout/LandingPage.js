import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors, utilities } from '../../styleVars';
import Header from './Header';
import Showcase from './Showcase';
import About from './About';
import Demo from './Demo';
import Packages from './Packages';
import Footer from './Footer';

const { primaryColor, darkColor, secondaryColor, lightColor } = colors;
const { borderRadius, animationSpeed } = utilities;

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Showcase />
      <About />
      <Demo />
      <Packages />
      <Footer />
    </div>
  )
}

