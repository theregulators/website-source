import React from 'react';

import { Container, Row, Col, Modal } from 'react-bootstrap';

const images = [
  {
    url: '/assets/app-screenshot.png',
    caption: 'Labelled screenshot of app'
  },
  {
    url: '/assets/jon-coding.jpg',
    caption: 'Jon happily coding away'
  },
  {
    url: '/assets/peter-scale.jpg',
    caption: 'Peter in the lab'
  },
  {
    url: '/assets/mesh-filter.jpg',
    caption: 'Mesh filter for red blood cells'
  },
  {
    url: '/assets/tmb-colors.jpg',
    caption: 'Colors of different TMB concentrations'
  },
  {
    url: '/assets/glucose-solutions.jpg',
    caption: 'Prepared glucose solutions'
  },
  {
    url: '/assets/calibration-curve.jpg',
    caption: 'Color-concentration regressions'
  },
  {
    url: '/assets/team-askew.jpg',
    caption: 'Everyone looking askew'
  },
];
let imagesHtml;

class MediaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null
    };
    imagesHtml = images.map((image, ind) => (<Col xs={12} md={4} key={image.url}>
      <div
        className='gallery-image rounded shadow'
        title={image.caption}>
        <div
          data-ind={ind}
          onClick={this.selectImage.bind(this)}
          style={{ backgroundImage: `url('${image.url}')` }}
          className='gallery-image-child'></div>
      </div>
    </Col>));
  }

  selectImage(event) {
    this.setState({
      selectedImage: images[event.target.dataset.ind]
    });
  }

  handleClose() {
    this.setState({
      selectedImage: null
    });
  }

  render() {
    return (<Container className='my-5'>
      <Modal show={this.state.selectedImage ? true : false} onHide={this.handleClose.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectedImage ? this.state.selectedImage.caption : ''}</Modal.Title>
        </Modal.Header>
        <img src={this.state.selectedImage ? this.state.selectedImage.url : ''} className='mw-100 w-100' alt={this.state.selectedImage ? this.state.selectedImage.caption : ''} />
      </Modal>

      <h3>Gallery</h3>
      <p>Click/tap an image to expand it.</p>

      <Row>
        {imagesHtml}
      </Row>
    </Container>);
  }
}

export default MediaComponent;
