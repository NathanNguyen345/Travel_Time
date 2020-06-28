import { createContext } from "react";

const adminContext = createContext({
  uploadLocationId: null,
  deleteLocationId: null,
  deletePictureId: null,
  locationData: [],
  pictureData: [],
  selectedPicture: null,
});

export default adminContext;
