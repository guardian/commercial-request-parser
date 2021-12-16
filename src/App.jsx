import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

import { useState } from 'react'
import Controls from './Controls'
import Output from './Output'

function App() {
  const [parsed, setParsed] = useState([])
  return (
    <div className="app">
      <header>
        YouTube & GAM Request Differ
      </header>
      <Controls setParsed={setParsed} />
      <Output parsed={parsed} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
