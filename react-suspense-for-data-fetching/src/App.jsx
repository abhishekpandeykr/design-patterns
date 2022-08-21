import { useCallback } from 'react'
import { Suspense, useState } from 'react'
import './App.css'
import ErrorBoundary from './Components/ApplicationErrorBoundry'
import { DynamicRepoTab } from './Components/DynamicRepoTab'
import { Repos } from './Components/Repos'

function App() {
  const [isHarCoded, setIsHarCoded] = useState(true)

  const toggleHarCoded = useCallback(() => {
    setIsHarCoded(!isHarCoded)
  }, [isHarCoded])

  return (
    <div className="App">
      <button onClick={toggleHarCoded} className="toggleApproach">
        {isHarCoded ? "Set Dyanmic" :"Use Hardcoded"}
      </button>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            {isHarCoded ? <Repos/> : <DynamicRepoTab />}
          </Suspense>
        </ErrorBoundary>
    </div>
  )
}

export default App
