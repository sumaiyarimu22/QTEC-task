/* eslint-disable no-case-declarations */
import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  EDITED,
  TOGGLED,
} from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("todos")) || [
  {
    id: 1,
    text: "Learn React JS",
    completed: true,
  },
  {
    id: 2,
    text: "Learn Redux",
    completed: false,
    color: "red",
  },
];

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case ADDED:
      newState = [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;

    case TOGGLED:
      newState = state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      newState = state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;

    case EDITED:
      const { id, newText } = action.payload;
      newState = state.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          text: newText,
        };
      });
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;

    case DELETED:
      newState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;

    case ALLCOMPLETED:
      newState = state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;

    case CLEARCOMPLETED:
      newState = state.filter((todo) => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export default reducer;
