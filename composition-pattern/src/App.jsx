import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import DashboardNav from './components/DashboardNav'
import DashboardContent from './components/DashboardContent'
import Header from './components/Header'
import Login from './components/Login'

function App() {
  const [currentUser, setCurrentUser] = useState()

  return (
    <div className="App">
      <div style={{background:"lightgray"}}>
        <Header />
      </div>
      {/* Before Compose */}
      {/* <div style={{flex:1}}>
        {currentUser ? (<Dashboard user={currentUser} />) : 
                      (<Login onLogin={() => setCurrentUser("Abhishek")} />)
        }
      </div> */}

      {/* After Compose */}
      <div style={{flex:1}}>
        {currentUser ? (<Dashboard>
          <DashboardNav />
          <DashboardContent>
            <WEllcomeMessage user={currentUser} />
          </DashboardContent>
        </Dashboard>) :
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
