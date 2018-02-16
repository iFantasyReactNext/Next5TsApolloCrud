import { compose, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = (store: { "project": "線上讀書會" }, action) => {
  switch (action.type) {
    default:
      return store
      break
  }
}

export default function configureStore() {

  const store = createStore(
    rootReducer,
    composeWithDevTools()

  )


}