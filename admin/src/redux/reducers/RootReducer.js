import { combineReducers } from "redux";
import AdminReducer from "./AdminReducer";
import SystemReducer from "./SystemReducer";

const RootReducer = combineReducers({
  AdminReducer: AdminReducer,
  SystemReducer: SystemReducer
});

export default RootReducer;



