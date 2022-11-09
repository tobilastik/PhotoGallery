import { EDIT_COMMENT, } from '../types';


const setEditComment = (payload: {}) => ({
  type: EDIT_COMMENT,
  payload,
});


export default {
  setEditComment,
};
