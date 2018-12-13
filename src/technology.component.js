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
      <p>The mobile app makes it easy for a user to determine blood glucose level from the test strip: the user points the camera at the image, and clicks the &quot;Analyze&quot; button. The device camera stream will be shown with a guiding marker in the app. A brief how-to guide in the app to help users.</p>
      <p>The color detection is a set of heuristics determined by trial and error. The major steps were threshold all of the pixels into clusters (i.e., breaking down the 2^24 color space down to 2^12 clusters), and filtering out clusters based on number of pixels (too few would indicate an insignificant splotch, such as a speck of dust, and too large might indicate a background color), center (the center of the clustered pixels should be near the center of the camera input), error using the &quot;jump method&quot<sup className='text-secondary'>1</sup>, and color (the dark blue ring was determined to be the best indicator of color, and thus the algorithm biased dark and primarily-blue clusters). The few clusters that remained would be averaged (weighted averaged based on number of pixels per cluster), and the R, G, and B values of this cluster would be put through the inverse trend lines generated by the model (see answer to (2)) to guess at the blood glucose level. The three estimates (one for R, G, and B) would be averaged (weighted based on R^2) to get a final BGL determination. This offers results better than the ones from last year’s app because it does not require any user input and can capture more complex patterns (i.e., the rings of color).</p>
      <p>The calibration &quot;trials&quot; involved running the heuristic filtering on the samples, and plotting the final cluster against BGL concentration. A trend line was created for each color. (A polynomial trend line worked best, but its end behavior did not make sense; the close-behind logarithmic models seemed more reasonable). Unsurprisingly, the trend line for the blue component was strongest, indicating that the difference between the blue could most reliably be used to determine BGL.</p>
      <p>The concentrations of the samples for calibration were known. When the heuristics are performed on these samples, there is some variation. If used correctly and lighting is consistent, the variation in readings of the same sample varied by up to roughly ±30mg/dL. While this may seem like a wide range of error, diabetics&apos; blood sugar levels can range far greater<sup className='text-secondary'>2</sup>, so it should still be a useful metric. With further experimentation, however, it is expected that the the algorithm should improve and variation should decrease, and user error and lighting will be better accounted for.</p>
    <small class='text-secondary'>[1]: https://blog.algolia.com/how-we-handled-color-identification/<br />[2]: https://www.joeniekrofoundation.com/stroke-2/3685/attachment/diabetes-blood-sugar-chart/</small>
    </div>);
  }
}

export default TechnologyComponent;
