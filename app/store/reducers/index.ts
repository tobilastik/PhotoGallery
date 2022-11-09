import {combineReducers} from 'redux';
import photos from './photos';
import comment from './comment';


const appReducer = combineReducers({
  photos,
  comment
});

export default appReducer;

export type State = ReturnType<typeof appReducer>;
