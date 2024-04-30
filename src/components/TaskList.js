import React from "react";
import Task from "./Task"

function TaskList( { tasks, handleDeleteTask } ) {
  return (
    <div className="tasks">
      {tasks.map(task => {
      return <Task key={task.text} task={task} handleDeleteTask={handleDeleteTask}/>
      })}
    </div>
  );
}

export default TaskList;
