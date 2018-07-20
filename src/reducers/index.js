import { combineReducers } from 'redux';
import faceRecBoxesReducer from './faceRecBoxes';
import userReducer from './user';

const combinedReducers = combineReducers({
  user: userReducer,
  boxes: faceRecBoxesReducer
});

export default combinedReducers;
