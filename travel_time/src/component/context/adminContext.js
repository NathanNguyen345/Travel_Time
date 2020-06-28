import { createContext } from "react";

const adminContext = createContext({
  uploadLocationId: "",
  deleteLocationId: "",
  deletePictureId: "",
  locationData: [],
  pictureData: [],
});

export default adminContext;
