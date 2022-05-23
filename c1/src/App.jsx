import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TaskApp from './components/TaskApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <TaskApp/>
    </div>
  )
}

export default App
