import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { filtersReducer } from "./filtersReducer";

export const rootReducer = combineReducers({
  tasks: taskReducer,
  filters: filtersReducer,
});
