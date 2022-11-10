import {  EDIT_COMMENT} from '../types';

const initialstate = {
  editComment: false,
};

type Action = {
  type: string;
  payload?: [];
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case EDIT_COMMENT:
      return Object.assign({}, state, {
        editComment: action.payload,
      });
    default:
      return state;
  }
};
