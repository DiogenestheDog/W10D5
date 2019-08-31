import todos_reducer from "./todos_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todos_reducer
});


export default rootReducer;