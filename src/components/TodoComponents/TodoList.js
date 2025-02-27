// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(element => {
          return (
            <Todo
              markCompleted={this.props.markCompleted}
              key={element.id}
              id={element.id}
              completed={element.completed}
              task={element.task}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
