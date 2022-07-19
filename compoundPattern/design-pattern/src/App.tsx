import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("hey there")
  }, [count])
  return (
    <div>
      Compound Component
    </div>
  )
}

export default App
