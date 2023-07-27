import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import cartReducer from "./cart";

const reducer = combineReducers({
  cart: cartReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
