import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_todos, delete_todo, set_current } from "../../actions/todo";

const TodoItem = ({ todos, get_todos, delete_todo, set_current }) => {
   useEffect(() => {
      get_todos();
   }, [get_todos]);

   return (
      <>
         {todos.map((todo) => {
            return (
               <>
                  <div className="todo_item" key={todo._id}>
                     <p className="lead ml-3">{todo.text}</p>
                     <div className="todo_btn">
                        <button className="btn btn-outline-success" onClick={() => set_current(todo)}>
                           upd
                        </button>
                        <button className=" btn btn-outline-danger" onClick={() => delete_todo(todo._id)}>
                           del
                        </button>
                     </div>
                  </div>
               </>
            );
         })}
      </>
   );
};

export default connect(null, { get_todos, delete_todo, set_current })(TodoItem);
