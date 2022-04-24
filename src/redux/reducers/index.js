import { combineReducers } from "redux";
import { itemReducer, selectedItemReducer, buttonReducer } from "./itemReducers";

const rootReducer = combineReducers({
  cars: itemReducer,
  selectedItem: selectedItemReducer,
  buttonText: buttonReducer,
});

export default rootReducer;
