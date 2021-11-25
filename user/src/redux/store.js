import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'; 
import rootReducer from "./reducers/RootReducer";

const initialState = {};
const middlewares = [thunk];
let devtools = x => x;

if (
  process.env.NODE_ENV !== "production" &&
  process.browser &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const persistConfig = {
  key: 'app',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middlewares), devtools)
);

export default store;

export const persistor = persistStore(store);
