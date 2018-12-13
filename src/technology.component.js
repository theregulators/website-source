import React from 'react';

import AboutDropdownComponent from './about-dropdown.component';

class TechnologyComponent extends React.Component {
  render() {
    return (<div>
      <h3>Technology</h3>
      <AboutDropdownComponent />
      <p>A mobile Android app was created to find the blood glucose level from an image of our test strip. It&apos;s simple for a user to use the app: point the camera at the image, click a button, and then the process is complete! The device camera stream will be shown with a guide in the app, along with two buttons to analyze and save measurements. A brief how-to guide is included in the About tab of the app.</p> 
      <figure class='figure d-block p-3'>
        <img class='figure-img d-block m-auto rounded mw-100' alt='Various features of the app.' src='/assets/app-screenshot.png' />
        <figcaption class='figure-caption text-center pt-2'>Various features of the app.</figcaption>
      </figure>
      <p>The image analysis generates clusters of similarly-colored pixels. The clusters are filters by size, center, &quot;jump&quot; error, and color to find the one representative of the darkest blue ring. Test data generated logarithmic trendlines to estimate blood sugar level from color. The color of the paper was used to estimate and account for lighting.</p>
      <p>This method offers several benefits over the app from last year, which used a blind arithmetic average of colors in a rectangular region. With consistent lighting, our app was accurate to ±30g/dL concentration.</p>
      <figure class='figure d-block p-3'>
        <img class='figure-img d-block m-auto rounded mw-100' alt='GIF of app in use.' src='/assets/app-demo.gif' />
        <figcaption class='figure-caption text-center pt-2'>The app in use. The glucose concentrations of the samples are 230mg/dL, 150mg/dL, 130mg/dL, and 70mg/dL.</figcaption>
      </figure>

      <p>In addition to the app, we have a reference color guide to visually determine blood glucose level, similar to that for the universal pH test strip.</p>

      <hr />

      <h5>Technical Description</h5>
      <p>A more technical description of the mobile app will be added here soon.</p>

    </div>);
  }
}

export default TechnologyComponent;
