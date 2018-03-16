import * as TYPES from './actionTypes'
import * as actions from './actionCreators'
import * as selectors from './selectors'

export { actions, selectors }

export const forms = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SET_INPUT:
      return Object.assign({}, state, { [action.domain]: action.payload })
    case TYPES.CLEAR_INPUT:
      return Object.assign({}, state, { [action.domain]: '' })
    default:
      return state
  }
}
