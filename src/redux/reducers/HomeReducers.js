import { SET_COMPONENT_ACTIVE } from "../types/HomeTypes";

const initialState = {
  zIndex: {
    document: 1,
    portfolio: 2,
    aboutMe: 3,
  },
};

export const HomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPONENT_ACTIVE:
      let zIndexUpdate = { ...state.zIndex };
      for (const key in zIndexUpdate) {
        if (key === action.page && zIndexUpdate[key] < 3) {
          console.log();
          zIndexUpdate[key] = 3;
        } else {
          if (zIndexUpdate[key] > 1) {
            zIndexUpdate[key] -= 1;
          }
        }
      }
      return { ...state, zIndex: { ...zIndexUpdate } };

    default:
      return state;
  }
};
