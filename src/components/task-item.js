import React from 'react'

const TaskItem = ({ task, onDeleteTask, onToogleTaskDone }) => (
  <div className="field">
    <div className="check-item">
      <input
        type="checkbox"
        name={task.name}
        id={task.id}
        checked={task.isDone}
        onClick={() => onToogleTaskDone(task.id)}
      />
      <label htmlFor="check-1" onClick={() => onToogleTaskDone(task.id)}>
        {task.title}
      </label>
    </div>
    <button className="button-icon close" onClick={() => onDeleteTask(task.id)}>
      <span className="icon icon-x-circle" />
    </button>
  </div>
)

export default TaskItem
