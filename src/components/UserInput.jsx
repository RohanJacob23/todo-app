import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context";

function UserInput() {
  const { addTask } = useContext(TodoContext);
  const [val, setVal] = useState("");

  function handleInput(e) {
    setVal(e.currentTarget.value);
  }

  // function to handle preventDefautl after submiting
  function handleSubmit(e) {
    e.preventDefault();
    console.log(val);
    addTask(val);
    setVal("");
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-item flex items-center w-4/5 max-w-lg m-auto relative bottom-32 p-4 rounded-md shadow-lg">
          <button
            type="submit"
            className="submitBtn rounded-full border h-5 w-5 md:w-6 md:h-6 outline-none"
          ></button>
          <input
            type="text"
            name="todoInput"
            id="todoInput"
            placeholder="Create a new todo..."
            className="bg-transparent outline-non ml-4 mt-1 w-full md:text-lg outline-none"
            onChange={handleInput}
            value={val}
            autoComplete="Off"
          />
        </div>
      </form>
    </div>
  );
}

export default UserInput;
