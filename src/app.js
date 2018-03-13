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
  [FILTERS.DONE]: task => task.isDone === true,
  [FILTERS.PENDING]: task => task.isDone === false
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { todos: [], filter: FILTERS.ALL }
    this.updateTodos = this.updateTodos.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
    this.handleToogleTaskDone = this.handleToogleTaskDone.bind(this)
  }
  updateTodos(todos) {
    this.setState({ todos })
  }
  updateFilter(filter) {
    this.setState({ filter })
  }
  handleDeleteTask(id) {
    const { todos } = this.state
    this.updateTodos(todos.filter(task => task.id !== id))
  }
  handleToogleTaskDone(id) {
    const { todos } = this.state
    const newTodos = todos.map(
      task =>
        task.id === id ? Object.assign(task, { isDone: !task.isDone }) : task
    )
    this.updateTodos(newTodos)
  }
  render() {
    const { todos, filter } = this.state
    return (
      <div className="main-content wrapper">
        <div className="todo">
          <CreateTaskForm todos={todos} update={this.updateTodos} />
          <TaskList
            todos={todos}
            onDeleteTask={this.handleDeleteTask}
            onToogleTaskDone={this.handleToogleTaskDone}
            update={this.updateTodos}
            filter={filter}
          />
          <Filters filter={filter} updateFilter={this.updateFilter} />
        </div>
      </div>
    )
  }
}
