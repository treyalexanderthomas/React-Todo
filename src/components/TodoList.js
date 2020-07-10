// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import { Button } from 'reactstrap';
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.tasks.map(task => (
        <Todo
          key={task.id}
          task={task}
        />
      ))}
      <Button className="clear-btn" onClick={props.clearComplete}>
        Clear
      </Button>
    </div>
  );
};

export default TodoList;