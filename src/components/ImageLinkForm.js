import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { detectFace, clearFaceBoxes } from '../actions';
import FaceRecognition from './FaceRecognition';
import './Spinner.css';

import './ImageLinkForm.css';

class ImageLinkForm extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: ''
    };
  }
  componentDidMount() {}

  setImageUrl = () => {
    let url = this.imageUrl.value;
    url = url.trim();
    const imageTypes = ['jpg', 'png', 'gif'];
    let isImage = false;

    for (let c = 0; c < imageTypes.length; c++) {
      if (url.toLowerCase().includes(imageTypes[0])) {
        isImage = true;
        break;
      }
    }

    if (isImage) {
      this.setState({
        imageUrl: url
      });
    } else {
      this.setState({
        imageUrl: ''
      });
    }
  };

  handleOnChange = e => {
    this.setImageUrl();
  };

  clearInput = () => {
    this.imageUrl.value = '';
    this.props.clearFaceBoxes();
    this.setState({
      imageUrl: ''
    });
  };

  onDetectClicked = e => {
    const id = this.props.user.id;
    const token = this.props.user.token;
    this.props.detectFace(this.state.imageUrl, id, token);
  };

  render() {
    return (
      <div className="w-100">
        <div className="mb3">
          <div className="white f3 tc">This Smart Brain will detect faces in your pictures</div>
          <div className="black f4 tc">Paste the URL to jpg, png or gif.</div>
        </div>
        <div className="form w-75 center f3 pv4 ph3-ns white tc ba bw1 b--white">
          <div className="cf w-100 ph2-ns">
            <div className="fl w-100 w-100-m w-60-ns pa2">
              <input
                ref={input => (this.imageUrl = input)}
                onChange={this.handleOnChange}
                className="br2 f5 pa2 w-100"
                placeholder="Paste URL to jpg, png or gif here."
                type="text"
              />
            </div>
            <div className="fl w-100 w-100-m w-20-ns pa2">
              <button
                className="br3 f4 ph3 fl w-100 pv2 grow white bg-dark-green items-left shadow-5 pointer"
                onClick={this.onDetectClicked}
              >
                Detect
              </button>
            </div>
            <div className="fl w-100 w-100-m w-20-ns pa2">
              <button
                className="br3 f4 ph3 fl w-100 pv2 grow white bg-dark-green items-left shadow-5 pointer"
                onClick={this.clearInput}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        {this.state.imageUrl && this.state.imageUrl !== '' ? (
          <FaceRecognition
            imageUrl={this.state.imageUrl}
            boxes={this.props.boxes && this.props.boxes.data && this.props.boxes.data.length ? this.props.boxes : []}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ user, boxes }) => {
  return { user, boxes };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ detectFace, clearFaceBoxes }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageLinkForm);
