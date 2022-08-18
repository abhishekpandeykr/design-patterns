import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Login from './components/Login'

function App() {
  const [currentUser, setCurrentUser] = useState()

  return (
    <div className="App">
      <div style={{background:"lightgray"}}>
        <Header />
      </div>
      <div style={{flex:1}}>
        {currentUser ? (<Dashboard user={currentUser} />) : 
                      (<Login onLogin={() => setCurrentUser("Abhishek")} />)
        }
      </div>
      <div style={{background:"lightgray"}}>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
