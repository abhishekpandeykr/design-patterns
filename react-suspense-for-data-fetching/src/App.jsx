import { Suspense, useState } from 'react'
import './App.css'
import ErrorBoundary from './Components/ApplicationErrorBoundry'
import { Repos } from './Components/Repos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <Repos/>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
