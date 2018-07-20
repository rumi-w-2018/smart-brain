import { FACE_REC_BOXES_SUCCESS, CLEAR_FACE_REC_BOXES } from '../actions/types';

const defaultState = {
  boxes: {
    isPending: true,
    isError: false,
    data: []
  }
};

const faceRecBoxes = (state = defaultState, action = {}) => {
  switch (action.type) {
    case FACE_REC_BOXES_SUCCESS:
      let objArray = [];
      if (action.payload.data && action.payload.data.length) {
        objArray = action.payload.data.map(obj => {
          return obj.region_info.bounding_box;
        });
      }
      return { ...action.payload, data: objArray };

    case CLEAR_FACE_REC_BOXES:
      return action.payload;

    default:
      return state;
  }
};

export default faceRecBoxes;
