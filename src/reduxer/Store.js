import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import { reducerFn } from "./ReducerFn";
import { customerReducer } from "./CustomerReducer";
import { thunk } from "redux-thunk";

const middlewareEnhancer = applyMiddleware(thunk)

const rootReducer = combineReducers({
    cash:reducerFn,
    customers:customerReducer
})

const store = configureStore({
    reducer : rootReducer, 
    middlewareEnhancer
   
})
export default store