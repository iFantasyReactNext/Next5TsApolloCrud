import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from 'redux-observable'
import { rootReducer, rootEpic } from './reduxObserable'
//import ReduxThunk from 'redux-thunk'
//創立一個 action steam
const epicMiddleware = createEpicMiddleware(rootEpic)
export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  )
  return store
}