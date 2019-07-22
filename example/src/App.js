import React from 'react'
import { Router } from '@reach/router'
import basePath from './basePath'
import Home from './Home'
import Example from './example/index'

import Table from 'components/Table'
import Reviews from 'components/Reviews'

import './App.css'

const App = () => (
  <div className="App">
    <Router basepath={basePath}>
      <Home path="/" />
      <Example title="Responsive Table" Component={Table} path="/table" />
      <Example title="Reviews" Component={Reviews} path="/reviews" />
    </Router>
  </div>
)

export default App
