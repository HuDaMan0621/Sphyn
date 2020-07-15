import { createStore } from "redux";
import favReducer from "./reducers/favReducer";

const store = createStore(favReducer);

export default store;