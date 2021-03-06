import React from 'react'
import { FILTERS } from '../app'

const Filters = ({ filter, updateFilter }) => (
  <div className="todo-footer">
    <div className="field inline-field">
      <div className="radio-item">
        <input
          type="radio"
          name="radio"
          id="radio-1"
          defaultChecked={Boolean(filter === FILTERS.ALL)}
          onClick={() => updateFilter(FILTERS.ALL)}
        />
        <label className="label" htmlFor="radio-1">
          Todos
        </label>
      </div>
      <div className="radio-item">
        <input
          type="radio"
          name="radio"
          id="radio-2"
          defaultChecked={Boolean(filter === FILTERS.DONE)}
          onClick={() => updateFilter(FILTERS.DONE)}
        />
        <label className="label" htmlFor="radio-2">
          Hechos
        </label>
      </div>
      <div className="radio-item">
        <input
          type="radio"
          name="radio"
          id="radio-3"
          defaultChecked={Boolean(filter === FILTERS.PENDING)}
          onClick={() => updateFilter(FILTERS.PENDING)}
        />
        <label className="label" htmlFor="radio-3">
          Sin hacer
        </label>
      </div>
    </div>
  </div>
)

export default Filters
