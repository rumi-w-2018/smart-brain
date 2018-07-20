import React from 'react';
import Spinner from './Spinner';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  const calculateBoxes = boxes => {
    const imageElem = document.getElementById('inputImage');
    if (imageElem) {
      const width = Number(imageElem.width);
      const height = Number(imageElem.height);

      const faceBoxStyleObjArray = boxes.map(box => {
        const obj = {
          top: height * box.top_row,
          left: width * box.left_col,
          bottom: height - height * box.bottom_row,
          right: width - width * box.right_col
        };
        const styleObj = {
          top: obj.top,
          right: obj.right,
          bottom: obj.bottom,
          left: obj.left
        };
        return styleObj;
      });
      return faceBoxStyleObjArray;
    }
  };

  if (boxes.isPending) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  let boxElements;
  if (boxes.data && boxes.data.length > 0) {
    const styles = calculateBoxes(boxes.data);
    boxElements = styles.map((style, i) => {
      return <div className="bounding-box" key={i} style={style} />;
    });
  }

  // The <div> with 'absolute' is important to position the box correctly.
  return (
    <div className="center ">
      <div className="absolute mt3">
        <img src={imageUrl} id="inputImage" className="face" width="500px" height="auto" alt="Input to be processed." />
        {boxElements}
      </div>
    </div>
  );
};

export default FaceRecognition;
