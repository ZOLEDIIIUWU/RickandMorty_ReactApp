import App from './App'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
