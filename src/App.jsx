import { useState } from 'react'
import './App.css'
import Controls from './Controls'
import Output from './Output'

function App() {
  const [parsed, setParsed] = useState([])
  return (
    <div className="App">
      <header>
        YouTube & GAM Request Differ
      </header>
      <Controls setParsed={setParsed} />
      <Output parsed={parsed} />
    </div>
  )
}

export default App
