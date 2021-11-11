import { combineReducers } from 'redux'
import { PERSON_ERROR, PERSON_LIST, PERSON_LOADING } from '../../actions/persons/list'

const error = (state = null, action) => {
  switch (action.type) {
    case PERSON_ERROR:
      return action.error
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case PERSON_LOADING:
      return action.loading
    default:
      return state
  }
}

const data = (state = [], action) => {
  switch (action.type) {
    case PERSON_LIST:
      return action.data
    default:
      return state
  }
}


export default combineReducers({ error, loading, data })