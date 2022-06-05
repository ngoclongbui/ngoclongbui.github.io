import { ACTIVE, CLOSE } from "../types/LoadingTypes";

const initialState = {
  isStatus: true,
};

export const LoadingReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE:
      return { ...state, isStatus: true };

    case CLOSE:
      return { ...state, isStatus: false };

    default:
      return state;
  }
};
