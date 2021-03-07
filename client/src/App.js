import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Todo from "./component/todos/Todo";

function App() {
   return (
      <>
         <Provider store={store}>
            <Todo />
         </Provider>
      </>
   );
}

export default App;
