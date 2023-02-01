import React from "react";
import close from "../images/icon-cross.svg";

function ListDisplay(props) {
  return (
    <div
      id={props.id}
      className="flex justify-between items-center border-b border-white/20 p-4"
    >
      <div className="flex w-11/12 items-center">
        <button
          className={`rounded-full border w-5 h-5 md:w-6 md:h-6 outline-none mr-4 ${
            props.status ? "doneBtn" : ""
          }`}
          onClick={() => props.changeStatus(props.id)}
        ></button>
        <p
          className={`overflow-auto w-full ${
            props.status ? "line-through opacity-70" : ""
          }`}
        >
          {props.task}
        </p>
      </div>
      <img
        src={close}
        alt=""
        onClick={() => props.handleClose(props.id)}
        className="cursor-pointer mr-4"
      />
    </div>
  );
}

export default ListDisplay;
