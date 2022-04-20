import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectProduct: selectedProductReducer,
});

export default reducers;
