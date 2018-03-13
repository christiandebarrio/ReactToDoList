import React from 'react'
import CreateTaskForm from './components/create-task-form'
import TaskList from './components/task-list'
import Filters from './components/filters'

export const FILTERS = {
  ALL: 'all',
  DONE: 'done',
  PENDING: 'pending'
}

export const filters = {
  [FILTERS.ALL]: task => task,
  [FILTERS.DONE]: task => task.done === true,
  [FILTERS.PENDING]: task => task.done === false
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { todos: [], filter: FILTERS.ALL }
    this.updateTodos = this.updateTodos.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
  }
  updateTodos(todos) {
    this.setState({ todos })
  }
  updateFilter(filter) {
    this.setState({ filter })
  }
  render() {
    const { todos, filter } = this.state
    return (
      <div className="main-content wrapper">
        <div className="todo">
          <CreateTaskForm todos={todos} update={this.updateTodos} />
          <TaskList todos={todos} update={this.updateTodos} filter={filter} />
          <Filters filter={filter} updateFilter={this.updateFilter} />
        </div>
      </div>
    )
  }
}
