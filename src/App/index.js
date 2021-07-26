import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Store from './store'
import Routes from './router'
import {Loader} from './components'

const history = createBrowserHistory()

function App() {
  return (
    <Provider store={Store}>
            <Router history={history}>
                <React.Suspense fallback={<Loader />}>
                  <Routes />
                </React.Suspense>
            </Router>
    </Provider>
  )
}

export default App