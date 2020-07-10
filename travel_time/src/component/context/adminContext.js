import { createContext } from "react";

const adminContext = createContext({
  uploadLocationId: null,
  deleteLocationId: null,
  locationData: [],
  pictureData: [],
  selectedPicture: null,
});

export default adminContext;
