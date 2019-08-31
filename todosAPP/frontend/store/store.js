import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import myThunk from "../middleware/thunk";
import {applyMiddleware} from 'redux';


const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(myThunk)
  );

} 

export default configureStore;
