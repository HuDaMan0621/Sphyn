import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors, utilities } from '../../styleVars';

const { primaryColor, darkColor, secondaryColor, lightColor } = colors;
const { borderRadius, animationSpeed } = utilities;

const demo = css`

.Demo {
    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    }


.demo-image > img {
    border-radius: ${borderRadius};
}

    

`

export default function Demo() {
    return (
        <div css={demo} >
            <div className='Demo'>
                <div className="demo-image">
                    <iframe width='853' height='480' src='https://my.matterport.com/show/?m=RJhF4E8pb7q' frameborder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
                </div>
                <div className="demo-image">
                    <iframe width='853' height='480' src='https://my.matterport.com/show/?m=zimbbJHhX7y' frameborder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
                </div>
                <div className="demo-image">
                    <iframe width='853' height='480' src='https://my.matterport.com/show/?m=CoPaqg84uwx' frameborder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
                </div>
                <div className="demo-image">
                    <iframe width='853' height='480' src='http://panoramic-leather.surge.sh/' frameborder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
                </div>
            </div>
        </div>
    )
}
