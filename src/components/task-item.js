import React from 'react'

const TaskItem = ({ task, deleteTask }) => (
  <div className="field">
    <div className="check-item">
      <input type="checkbox" name="check" id="check-1" />
      <label htmlFor="check-1">{task.title}</label>
    </div>
    <button className="button-icon close" onClick={() => deleteTask(task.id)}>
      <span className="icon icon-x-circle" />
    </button>
  </div>
)

export default TaskItem
