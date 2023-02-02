import React from "react";
import { todo } from "./components/ListObj";
import { useState } from "react";

const TodoContext = React.createContext();

function ContextProvider({ children }) {
  // function to get local data if exist
  function getLocalTodo() {
    let check = localStorage.getItem("localTodo");
    let localCounter = localStorage.getItem("counter");
    if (check) {
      check = JSON.parse(check);
      localCounter = JSON.parse(localCounter);
    } else {
      check = todo;
      localCounter = 6;
    }
    return [check, localCounter];
  }
  const [task, setTask] = useState(getLocalTodo()[0]);
  const [counter, setCounter] = useState(getLocalTodo()[1]);

  // function to add task to the list
  const addTask = (val) => {
    setTask((prev) => [...prev, { id: counter, task: val, done: false }]);
    setCounter((prev) => prev + 1);
  };

  // function to remove tast from the list
  function removeTask(id) {
    setTask((prev) => {
      let afterRemoving = prev.filter((list) => list.id !== id);
      return afterRemoving;
    });
  }

  //function to change the status
  function changeStatus(id) {
    setTask((prev) => {
      const updated = prev.map((list) => {
        if (list.id === id && list.done !== true) {
          list.done = true;
        } else if (list.id === id && list.done === true) {
          list.done = false;
        }
        return list;
      });
      return updated;
    });
  }

  // fuction to clear all the completed task
  function clear() {
    setTask((prev) => {
      const updated = prev.filter((list) => !list.done);
      return updated;
    });
  }

  // updating the task to local storage
  localStorage.setItem("localTodo", JSON.stringify(task));
  localStorage.setItem("counter", JSON.stringify(counter));

  return (
    <TodoContext.Provider
      value={{ task, addTask, removeTask, counter, changeStatus, clear }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { ContextProvider, TodoContext };
