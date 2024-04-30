import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasksState, setTasksState] = useState(TASKS)
  const [categoriesState, setCategoriesState] = useState(CATEGORIES)
  const [chosenCategory, setChosenCategory] = useState("All")

  function handleDeleteTask(deletedTask){
    const filteredTasks = tasksState.filter(task => task !== deletedTask)
    setTasksState(filteredTasks)
  }

  function filterCategory(buttonCategory){
    setChosenCategory(buttonCategory)
    const filteredCategories = TASKS.filter(task => task.category === buttonCategory || buttonCategory === "All") 

    setTasksState(filteredCategories)
  }


  function handleNewTask(newTask){
    setTasksState([...tasksState, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categoriesState} filterCategory={filterCategory} chosenCategory={chosenCategory}/>
      <NewTaskForm categories={categoriesState} onTaskFormSubmit={handleNewTask}/>
      <TaskList tasks={tasksState} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
