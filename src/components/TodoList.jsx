import React from "react";
import ListDisplay from "./ListDisplay";
import { useContext, useState } from "react";
import { TodoContext } from "../context";
import { useEffect } from "react";

function TodoList() {
  const { task, removeTask, counter, changeStatus, clear } =
    useContext(TodoContext);
  const [sort, setSort] = useState("All");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(counter);

  useEffect(() => {
    function sortList() {
      let list;
      if (sort === "All") {
        list = task;
      } else if (sort === "Active") {
        list = task.filter((lis) => !lis.done);
      } else {
        list = task.filter((lis) => lis.done);
      }
      setCount(list.length);
      return list;
    }
    setList(() => sortList());
  }, [sort, task]);

  // useEffect(() => {
  //   setList(() => sortList());
  // }, [task]);

  const l = list.map((lis) => {
    return (
      <ListDisplay
        key={lis.id}
        id={lis.id}
        changeStatus={changeStatus}
        handleClose={removeTask}
        task={lis.task}
        status={lis.done}
      />
    );
  });

  return (
    <div className="todo-list cursor-pointer w-4/5 max-w-lg text-white flex flex-col justify-center m-auto relative bottom-28 rounded-md text-sm md:text-lg shadow-2xl">
      {l}
      <div className="flex justify-between p-5">
        <p>{count} Items left</p>
        <div className="sort absolute flex w-5/6 gap-8 m-auto justify-center items-center md:static md:justify-between md:w-2/5 md:gap-0">
          <p
            className={`hover:opacity-100 opacity-50 cursor-pointer ml-3 ${
              sort === "All" ? "active-color" : ""
            }`}
            onClick={() => setSort("All")}
          >
            All
          </p>
          <p
            className={`hover:opacity-100 opacity-50 cursor-pointer ml-3 ${
              sort === "Active" ? "active-color" : ""
            }`}
            onClick={() => setSort("Active")}
          >
            Active
          </p>
          <p
            className={`hover:opacity-100 opacity-50 cursor-pointer ml-3 ${
              sort === "Completed" ? "active-color" : ""
            }`}
            onClick={() => setSort("Completed")}
          >
            Completed
          </p>
        </div>
        <p
          className="clear-completed hover:opacity-100 opacity-50 cursor-pointer ml-2"
          onClick={clear}
        >
          Clear Completed
        </p>
      </div>
    </div>
  );
}

export default TodoList;
