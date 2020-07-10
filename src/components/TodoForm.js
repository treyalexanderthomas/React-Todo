import React from "react";
import { Input, Button, Form } from 'reactstrap';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

handleChanges = e => {
    console.log(
      "typing",
      e.target.value
    );
    this.setState({ task: e.target.value });
};

handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.task);
  };


render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="task"
          placeholder="Enter task here..."
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <Button>Add</Button>
      </Form>
    );
  };
};

export default TodoForm;