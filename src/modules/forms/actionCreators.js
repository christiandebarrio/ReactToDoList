import { SET_INPUT, CLEAR_INPUT } from './actionTypes'

export const setInput = (domain, value) => ({
  type: SET_INPUT,
  payload: value,
  domain
})

export const clearInput = domain => ({
  type: CLEAR_INPUT,
  domain
})
