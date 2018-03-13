import React from 'react'
import TaskItem from './task-item'
import { filters } from '../app'

const TaskList = ({ todos, update, filter }) => {
  const filteredTodos = todos.filter(filters[filter])
  return (
    <div className="todo-body">
      {filteredTodos.map((task, index) => (
        <TaskItem
          task={task}
          deleteTask={id => update(todos.filter(task => task.id !== id))}
          key={index}
        />
      ))}
    </div>
  )
}

export default TaskList
