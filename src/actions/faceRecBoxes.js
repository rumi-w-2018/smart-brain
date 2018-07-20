import 'whatwg-fetch';
import { FACE_REC_BOXES_PENDING, FACE_REC_BOXES_SUCCESS, CLEAR_FACE_REC_BOXES } from './types';
import { baseUrl } from './config';

const setFaceBoxes = data => ({
  type: FACE_REC_BOXES_SUCCESS,
  payload: {
    isPending: false,
    isError: false,
    data: data
  }
});

const faceBoxesPending = data => ({
  type: FACE_REC_BOXES_PENDING,
  payload: {
    isPending: true,
    isError: false,
    data: []
  }
});

export const detectFace = (imageUrl, userId, userToken) => dispatch => {
  dispatch(faceBoxesPending());

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`
    },
    body: JSON.stringify({
      id: userId,
      imageUrl: encodeURI(imageUrl)
    })
  };

  const url = `${baseUrl}image`;

  fetch(url, options)
    .then(response => {
      return response.json();
    })
    .then(json => {
      dispatch(setFaceBoxes(json.data.outputs[0].data.regions));
    })
    .catch(error => {
      console.log('error', error);
    });
};

export const clearFaceBoxes = () => ({
  type: CLEAR_FACE_REC_BOXES,
  payload: []
});
