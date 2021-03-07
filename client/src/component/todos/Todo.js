import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { add_todo, update_todo, clear_current, get_todos } from "../../actions/todo";
import TodoItem from "./TodoItem";
const Todo = ({ allTodos: { todos, current }, add_todo, update_todo, clear_current, get_todos }) => {
   const [data, setData] = useState("");
   console.log(current);
   useEffect(() => {
      if (current) {
         setData(current.text);
      }
   }, [current, get_todos]);
   const handleSubmit = (e) => {
      e.preventDefault();
      if (current) {
         update_todo(current._id, data);
         setData("");
         get_todos();
         clear_current();
      } else {
         add_todo(data);
         setData("");
      }
   };
   return (
      <>
         <div className="todo_container">
            <div className="heading">
               <h2>Todo List</h2>
            </div>
            <form onSubmit={handleSubmit} className="row">
               <div className="form-group col-md-8">
                  <input
                     type="text"
                     className="form-control"
                     name="text"
                     placeholder={!current ? "Add todo" : ""}
                     value={data}
                     onChange={(e) => setData(e.target.value)}
                     required
                  />
               </div>

               <div className="form-group col-md-4">
                  <button type="submit" className="btn btn-primary">
                     {current ? "update" : "add"}
                  </button>
               </div>
            </form>
            <TodoItem todos={todos} />
         </div>
      </>
   );
};

const mapStateToProps = (state) => {
   return {
      allTodos: state.todoReducer,
   };
};

export default connect(mapStateToProps, { add_todo, update_todo, clear_current, get_todos })(Todo);
