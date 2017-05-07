import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gradingApp from './reducers'
import App from './components/App'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = createStore(gradingApp)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
