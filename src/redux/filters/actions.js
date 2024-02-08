import { COLORCHANGED, PRIORITYCHANGED } from "./actionTypes";

export const colorChanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};

export const priorityChanged = (priority) => {
  return {
    type: PRIORITYCHANGED,
    payload: priority,
  };
};
