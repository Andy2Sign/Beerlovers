import { createStore } from "redux";
import ReducerData from './Reducer';

const initialState = {items: []};
const store = createStore(ReducerData, initialState);


export default store;