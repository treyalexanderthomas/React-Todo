import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

  const tasks = [
    {
      name: '',
      id: '',
      complete: false
    }
  ]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }
  addItem = taskName => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          name: taskName,
          id: Date.now(),
          complete: false
        }
      ]
    });
  };
  
  toggleComplete = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            complete: !task.complete
          };
        }
        console.log(this.toggleComplete, "toggle")
        return task;
      })
    }); 
  };

  clearComplete = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.complete;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
         <h3>Using setState</h3>  
         <TodoForm addItem={this.addItem} /> 
         <TodoList
          tasks={this.state.tasks}
          toggleComplete={this.toggleComplete}
          clearComplete={this.clearComplete}
        />
      </div>

    );
  }
}

export default App;
