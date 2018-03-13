import React from 'react'
import PropTypes from 'prop-types'
import TaskItem from './task-item'
import { filters } from '../app'

const TaskList = ({ todos, onDeleteTask, onToogleTaskDone, filter }) => {
  const filteredTodos = todos.filter(filters[filter])
  return (
    <div className="todo-body">
      {filteredTodos.map((task, index) => (
        <TaskItem
          task={task}
          onDeleteTask={onDeleteTask}
          onToogleTaskDone={onToogleTaskDone}
          key={index}
        />
      ))}
    </div>
  )
}

TaskList.propsTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired
    })
  ).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToogleTaskDone: PropTypes.func.isRequired
}

export default TaskList
