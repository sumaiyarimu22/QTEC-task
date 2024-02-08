/* eslint-disable no-case-declarations */
import { COLORCHANGED, PRIORITYCHANGED } from "./actionTypes";

const initialState = {
  priority: "LOW",
  colors: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRIORITYCHANGED:
      return {
        ...state,
        priority: action.payload,
      };

    case COLORCHANGED:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
