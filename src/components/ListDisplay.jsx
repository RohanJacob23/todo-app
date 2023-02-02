import React from "react";
import close from "../images/icon-cross.svg";
import { useState } from "react";

function ListDisplay(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      id={props.id}
      className="flex list-display justify-between items-center p-4"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="flex w-11/12 items-center">
        <button
          className={`hoverEff rounded-full border w-5 h-5 md:w-6 md:h-6 outline-none mr-4 ${
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
        className={`cursor-pointer mr-4 ${isShown ? "" : "show-close"}`}
      />
    </div>
  );
}

export default ListDisplay;
