import React from 'react'
import { createRoot } from 'react-dom/client';
import './App.css'

import { useState } from 'react'
import Controls from './Controls'
import Output from './Output'

function App() {
  const [parsed, setParsed] = useState([])
  return (
    <div className="app">
      <header>
        Commercial Request Parser
      </header>
      <Controls setParsed={setParsed} />
      <Output parsed={parsed} />
    </div>
  )
}

const rootEl = document.getElementById('root')
const root = createRoot(rootEl)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
