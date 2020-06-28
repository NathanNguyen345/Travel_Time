import {
  UPLOAD_ID,
  DELETE_LOCATION_ID,
  DELETE_PICTURE_ID,
  LOCATION_DATA,
  PICTURE_DATA,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case UPLOAD_ID:
      state.uploadLocationId = action.value;
      return { ...state };
    case DELETE_LOCATION_ID:
      state.deleteLocationId = action.value;
      return { ...state };
    case DELETE_PICTURE_ID:
      state.deletePictureId = action.value;
      return { ...state };
    case LOCATION_DATA:
      state.locationData = action.value;
      return { ...state };
    case PICTURE_DATA:
      state.pictureData = action.value;
      return { ...state };
    default:
      return;
  }
};
