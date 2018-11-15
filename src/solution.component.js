import React from 'react';

import AboutDropdownComponent from './about-dropdown.component';

class SolutionComponent extends React.Component {
  render() {
    return (<div>
      <h3>Solution</h3>
      <AboutDropdownComponent />
      <h5 className='mt-3'>Overview</h5>
      <p>The objective of this project is to create a low-cost alternative to blood glucose testing using glucometers for the people of Kampala, Uganda and other developing countries to develop cheap and effective test strips. The strips would be easy to use and accurate. A user would apply a drop of blood to a test strip which would produce a color change based on the level of glucose in the sample. In addition to the strips, we hope to create a corresponding app which would accurately read the color change.</p>
      <p>Our project is centered on glucose colorimetric paper test strips and focused on improving the visual accuracy of the blood sugar determination through indicator experimentation. When glucose is introduced to the strips, a color change occurs and indicates the relative blood glucose and diabetic status of the user. Glucose oxidase, the primary glucose reagent in glucometers, will be used in these test strips to produce gluconic acid and hydrogen peroxide. We plan to use indicators such as potassium iodide (using the well-known starch-iodide color change), TMB, and 2,2`-Bipyridine (Fe complex); these indicators can all be used to visually differentiate between different levels of hydrogen peroxide, which should be approximately proportional to blood glucose levels. The glucose oxidase and indicator solutions will be distributed in bottles, from which tests can be conducted dropwise onto strips of A4 copy paper. To complement the colorimetric strips, we hope to create a smartphone application that uses camera input and a color analysis algorithm to determine the glucose level (to a reasonable accuracy) based on the color of the strips. The Uganda Bureau of Statistics shows that 86% of 18-30-year-olds own a smartphone and most Kampala households have access to a smartphone so a mobile app is reasonable.</p>
    </div>);
  }
}

export default SolutionComponent;
