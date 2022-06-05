import { ACTIVE, CLOSE } from "../types/LoadingTypes";

export const activeLoadingAction = () => ({
  type: ACTIVE,
});

export const closeLoadingAction = () => ({
  type: CLOSE,
});
