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

const initialState = {
  bookList: [
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
  ],
  editBook: {},
  update: false,
};

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return {
        ...state,
        bookList: [
          ...state.bookList,
          {
            id: nextTodoId(state.bookList),
          },
        ],
      };

    case TOGGLED:
      return {
        ...state,
        bookList: state.bookList.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return {
        ...state,
        bookList: state.bookList.map((todo) => {
          if (todo.id !== todoId) {
            return todo;
          }
          return {
            ...todo,
            color: color,
          };
        }),
      };

    case EDITED:
      return {
        ...state,
        editBook: { ...action.payload },
        update: true,
      };

    case DELETED:
      return {
        ...state,
        bookList: state.bookList.filter((todo) => todo.id !== action.payload),
      };

    case ALLCOMPLETED:
      return {
        ...state,
        bookList: state.bookList.map((todo) => ({
          ...todo,
          completed: true,
        })),
      };

    case CLEARCOMPLETED:
      return {
        ...state,
        bookList: state.bookList.filter((todo) => !todo.completed),
      };

    default:
      return state;
  }
};

export default reducer;
