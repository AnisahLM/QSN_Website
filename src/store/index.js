import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import auth from "./auth";
import form from "./form";
import products from "./products";

const reducer = combineReducers({
  auth,
  form,
  products,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from "./auth";
export * from "./form";
export * from "./products";
