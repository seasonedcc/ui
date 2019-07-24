import React from 'react'
import { Router } from '@reach/router'
import basePath from './basePath'
import Home from './Home'
import Example from './example/index'

import Reviews from 'components/Reviews'
import Snackbar from 'components/Snackbar'
import Table from 'components/Table'

import './App.css'

const App = () => (
  <div className="App">
    <Router basepath={basePath}>
      <Home path="/" />
      <Example
        title="Responsive Table"
        Component={Table}
        path="/responsive-table"
      />
      <Example title="Reviews" Component={Reviews} path="/evaluator" />
      <Example title="Snackbar" Component={Snackbar} path="/snackbar" />
    </Router>
  </div>
)

export default App
