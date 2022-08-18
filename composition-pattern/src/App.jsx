import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import DashboardNav from './components/DashboardNav'
import DashboardContent from './components/DashboardContent'
import Header from './components/Header'
import Login from './components/Login'
import SplitPane from './secondComponents/splitPane'
import Contacts from './secondComponents/Contacts'
import Chat from './secondComponents/Chat'
import WelcomeMessage from './components/WelcomeMessage'

function App() {
  const [currentUser, setCurrentUser] = useState()

  return (
    <div className="App">
      <div style={{background:"lightgray"}} className="text-3xl font-bold underline">
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
            <WelcomeMessage user={currentUser} />
          </DashboardContent>
        </Dashboard>) :
                      (<Login onLogin={() => setCurrentUser("Abhishek")} />)
        }
      </div>
      <div style={{background:"lightgray"}}>
        {/* <div className='flex flex-grow'>
          <div className='basis-1/2'>
            Test
          </div>
          <div className='basis-1/2'>
            Test 2
          </div>
        </div> */}
        {currentUser && <SplitPane left={<Contacts />} right={
            <Chat welcomeMsg={<WelcomeMessage user={currentUser} />}/>
          } 
        />}
      </div>
    </div>
  )
}

export default App
