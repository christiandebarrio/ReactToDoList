import React, { Component } from 'react'

export default class CreateTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
    this.id = 0
    this.handleChange = this.handleChange.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
  }
  handleChange(e) {
    this.setState({ title: e.target.value })
  }
  handleAddTask() {
    const title = this.state.title
    const task = { title, done: false, id: this.id++ }
    const newTodos = this.props.todos.concat(task)
    this.props.update(newTodos)
    this.clearTaskInput()
  }
  clearTaskInput() {
    this.setState({ title: '' })
  }
  render() {
    return (
      <div className="todo-header">
        <div className="field inline-field">
          <input
            type="text"
            placeholder="Escribe aquí para añadir"
            value={this.state.title}
            onChange={this.handleChange}
            onKeyUp={e => e.keyCode === 13 && this.handleAddTask()}
          />
          <button className="button" type="submit" onClick={this.handleAddTask}>
            <span className="text">Añadir</span>
          </button>
        </div>
      </div>
    )
  }
}
