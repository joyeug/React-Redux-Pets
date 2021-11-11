import { combineReducers } from "redux";
import { PET_ERROR, PET_LIST, PET_LOADING } from "../../actions/pets/list";

const error = (state = null, action) => {
  switch (action.type) {
    case PET_ERROR:
      return action.error;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case PET_LOADING:
      return action.loading;
    default:
      return state;
  }
};

const data = (state = [], action) => {
  switch (action.type) {
    case PET_LIST:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({ error, loading, data });
