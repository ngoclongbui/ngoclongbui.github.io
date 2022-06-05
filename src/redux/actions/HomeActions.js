import { SET_COMPONENT_ACTIVE } from "../types/HomeTypes";

export const setComponentActiveAction = (page) => ({
  type: SET_COMPONENT_ACTIVE,
  page,
});
