import { setStore, createStore } from "hooks-for-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";

const logDispatch = (store) => (next) => (action) => {
  return next(action);
};

process.env.NODE_ENV === "development" &&
  setStore(createStore({}, composeWithDevTools(applyMiddleware(logDispatch))));