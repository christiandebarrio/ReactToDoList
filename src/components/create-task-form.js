import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, selectors } from '../modules/forms'
class CreateTaskForm extends Component {
  constructor(props) {
    super(props)
    this.id = 0
    this.handleChange = this.handleChange.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
  }
  handleChange(e) {
    this.props.setInput(e.target.value)
  }
  handleAddTask() {
    const title = this.props.newTaskValue
    const task = { title, isDone: false, id: this.id++ }
    const newTodos = this.props.todos.concat(task)
    this.props.update(newTodos)
    this.clearTaskInput()
  }
  clearTaskInput() {
    this.props.clearInput()
  }
  render() {
    return (
      <div className="todo-header">
        <div className="field inline-field">
          <input
            name="newTask"
            type="text"
            placeholder="Escribe aquí para añadir"
            value={this.props.newTaskValue}
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

const DOMAIN = 'newTask'

const mapStateToProps = state => ({
  newTaskValue: selectors.getInput(DOMAIN, state)
})

const mapDispatchToProps = {
  setInput: value => actions.setInput(DOMAIN, value),
  clearInput: () => actions.clearInput(DOMAIN)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm)
