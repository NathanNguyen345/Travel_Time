import {
  UPLOAD_ID,
  DELETE_LOCATION_ID,
  DELETE_PICTURE_ID,
  LOCATION_DATA,
  PICTURE_DATA,
  SELECTED_PICTURE,
  ADD_PICTURE_DATA,
} from "./types";

const removePictureData = (id, state) => {
  const newPictureData = [...state.pictureData];

  newPictureData.find((data, index) => {
    if (data._id === id) {
      newPictureData.splice(index, 1);
    }
  });

  return {
    ...state,
    pictureData: newPictureData,
  };
};

const addPictureData = (data, state) => {
  const newPictureData = [...state.pictureData, data];

  return {
    ...state,
    pictureData: newPictureData,
  };
};

export default (state, action) => {
  switch (action.type) {
    case UPLOAD_ID:
      state.uploadLocationId = action.value;
      return { ...state };
    case DELETE_LOCATION_ID:
      state.deleteLocationId = action.value;
      return { ...state };
    case DELETE_PICTURE_ID:
      return removePictureData(action.value, state);
    case ADD_PICTURE_DATA:
      return addPictureData(action.value, state);
    case LOCATION_DATA:
      state.locationData = action.value;
      return { ...state };
    case PICTURE_DATA:
      state.pictureData = action.value;
      return { ...state };
    case SELECTED_PICTURE:
      state.selectedPicture = action.value;
      return { ...state };
    default:
      return;
  }
};
