import React from "react";

const Todo = props => {
    const handleClick = e => {
        props.toggleComplete(props.task.id);
      };
  return (
    <div
    onClick={handleClick}
      className={`task ${props.task.complete ? "complete" : ""}`}
    >
      <p>{props.task.name}</p>
    </div>
  );
};

export default Todo;