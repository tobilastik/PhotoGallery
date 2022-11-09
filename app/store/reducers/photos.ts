import { PHOTO_GALLERY, SELECTED_PHOTO} from '../types';

const initialstate = {
  photoGallery: [],
  selectedPhoto: ''
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case PHOTO_GALLERY:
      return Object.assign({}, state, {
        photoGallery: action.payload,
      });
       case SELECTED_PHOTO:
      return Object.assign({}, state, {
        selectedPhoto: action.payload,
      });
    default:
      return state;
  }
};
