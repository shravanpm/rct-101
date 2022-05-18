import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter initial={0} />
    </div>
  )
}

export default App
