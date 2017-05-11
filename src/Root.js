import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import gradingApp from './reducers'
import App from './components/App'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = createStore(
  gradingApp,
  applyMiddleware(
    thunkMiddleware, //Though not truly needed for local storage, it lets me code the same for any persistent store.
  )
)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
