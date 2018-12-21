import React from 'react';

import AboutDropdownComponent from './about-dropdown.component';

class ChemistryComponent extends React.Component {
  render() {
    return (<div>
      <h3>Chemistry</h3>
      <AboutDropdownComponent />
      <p>The idea of a colorimetric test strip was tested by G-Cubed solutions (Chan et al, 2017) the previous year. The test strip currently consists of a mixture of chemical indicators, a filter mesh and a small strip of plain white printer paper. The printer paper was chosen because it is the cheapest, uniform paper that was found. The chemical mix is made up of TMB or 3,3',5,5'-Tetramethylbenzidine, Horseradish peroxidase, and glucose oxidase dissolved in a mixture of ethanol and deionized water. When it comes into contact with glucose, the glucose oxidase will break it down and produce gluconic acid and hydrogen peroxide. Horseradish peroxidase then oxidizes the TMB using hydrogen peroxide and produces a blue color change. The filter mesh is used to filter out the Red blood cells from the sample of blood. This is done to remove the red color in the blood as to not affect the color of the test. The filter mesh is made up of electrospun polymers with a weave small enough to limit the passage of cells including RBC through it.</p>
      <p>The mixture of chemicals and the amount to put on the test strip was found based on the effective units of each reagent. The Glucose oxidase mixture was 30 units per ml, the Horseradish Peroxidase was 60 units per ml and it was decided to make the TMB mass equal to the peroxidase due to a lack of unit measurement.</p>
      <p>The test strip is made by placing the sample blood through the filter mesh, onto the piece of paper then adding the chemical mixture. This was found to be the best order due to the red color that developed from putting the chemical mixture first.</p>
    </div>);
  }
}

export default ChemistryComponent;
