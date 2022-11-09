import { PHOTO_GALLERY, SELECTED_PHOTO} from '../types';

const setPhotos = (payload: {}) => ({
  type: PHOTO_GALLERY,
  payload,
});

const setSelectedPhoto = (payload: {}) => ({
  type: SELECTED_PHOTO,
  payload,
});


export default {
  setPhotos,
  setSelectedPhoto
};
