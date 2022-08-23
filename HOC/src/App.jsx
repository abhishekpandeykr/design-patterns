import { useState } from 'react'
import './App.css'
import DogImages from './components/DogImages'
import withStyles from './hoc/withStyle'
import AddCharacter from './renderProps/AddCharacter'
import StaticText from './renderProps/StaticText'

const Button = () => <button>Click Me!!!</button>
const Text = () => <p>Hello World!!!</p>

const StyledButton = withStyles(Button)
const StyledText = withStyles(Text)

const renderHOC = () => (
  <>
    <h3>Here we are Rendering HOC</h3>
    <StyledButton />
    <StyledText />
    <DogImages />
  </>
)

const renderProps = () => (
  <>
    <StaticText render={() => <h1>Hi there from Render Props</h1>} />
    <AddCharacter render={value => (<>
      <h1>{value}</h1>  
    </>)
  } />
  </>
)

function App() {
  const [activeTab, setActiveTab] = useState('HOC')
  console.log({activeTab})

  return (
    <>
      <div class="tab">
        <button class={`tablinks ${activeTab === 'HOC' ? 'active' : ''}`} onClick={() => setActiveTab('HOC')}>HOC</button>
        <button class={`tablinks ${activeTab === 'RENDER_PROPS' ? 'active' : ''}`} onClick={() => setActiveTab('RENDER_PROPS')}>Render Props</button>
      </div>
      {activeTab === "HOC" && renderHOC()}
      {activeTab === "RENDER_PROPS" && renderProps()}

    </>
  )
}

export default App
