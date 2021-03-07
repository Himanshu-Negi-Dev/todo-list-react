import { ADD_TODO, DELETE_TODO, GET_TODOS, SET_CURRENT, CLEAR_CURRENT, UPDATE_TODO } from "./types";
import axios from "axios";

//add todo
export const add_todo = (text) => {
   return async (dispatch) => {
      try {
         const res = await axios.post("/todo-list/add", { text: text });
         dispatch({
            type: ADD_TODO,
            payload: res.data,
         });
      } catch (err) {
         console.log(err.message);
      }
   };
};

//get all todos

export const get_todos = () => {
   return async (dispatch) => {
      try {
         const res = await axios.get("/todo-list");
         dispatch({
            type: GET_TODOS,
            payload: res.data,
         });
      } catch (err) {
         console.log(err);
      }
   };
};

//delete todo

export const delete_todo = (todo_id) => {
   return async (dispatch) => {
      try {
         await axios.delete(`/todo-list/${todo_id}`);

         dispatch({
            type: DELETE_TODO,
            payload: todo_id,
         });
      } catch (err) {
         console.log(err);
      }
   };
};

export const update_todo = (todo_id, text) => {
   return async (dispatch) => {
      try {
         const res = await axios.put(`/todo-list/todo/${todo_id}`, { text });
         dispatch({
            type: UPDATE_TODO,
            payload: res.data,
         });
      } catch (err) {
         console.log(err);
      }
   };
};

export const set_current = (todo) => {
   return {
      type: SET_CURRENT,
      payload: todo,
   };
};
export const clear_current = () => {
   return {
      type: CLEAR_CURRENT,
   };
};
