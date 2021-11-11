import { combineReducers } from 'redux'
import { SELECT_DATE } from '../../actions/Date/select'

const selected = (initialState = '21', action) => {
  switch (action.type) {
    case SELECT_DATE:
      return action.payload
    default:
      return initialState
  }
}

export default combineReducers({ selected })