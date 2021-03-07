import { ADD_TODO, CLEAR_CURRENT, DELETE_TODO, GET_TODOS, SET_CURRENT, UPDATE_TODO } from "../actions/types";

const initialState = {
   todos: [],
   current: null,
   loading: true,
};

export const todoReducer = (state = initialState, action) => {
   const { type, payload } = action;
   switch (type) {
      case ADD_TODO:
         return {
            ...state,
            todos: [...state.todos, payload],
            loading: false,
         };

      case GET_TODOS:
         return {
            ...state,
            todos: payload,
            loading: false,
         };

      case UPDATE_TODO:
         return {
            ...state,
            todos: state.todos.map((todo) => (todo._id === state.current.id ? payload : todo)),
         };
      case DELETE_TODO:
         return {
            ...state,
            todos: state.todos.filter((todo) => todo._id !== payload),
            loading: false,
         };

      case SET_CURRENT:
         return {
            ...state,
            current: payload,
         };

      case CLEAR_CURRENT: {
         return {
            ...state,
            current: null,
         };
      }
      default:
         return state;
   }
};
