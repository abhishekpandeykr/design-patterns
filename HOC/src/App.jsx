import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import DogImages from './components/DogImages'
import withStyles from './hoc/withStyle'
import useKeyPress from './hooks/useKeyPress'
import AddCharacter from './renderProps/AddCharacter'
import LanguageFacts from './renderProps/LanguageFacts'
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
      {value && <LanguageFacts searchTerm={value} />}
      {!value && <h6>Please Search Your Indian Known Language</h6>}
    </>)
  } />
  </>
)

const renderHooks = () => {
  const [inputVal, setInputVal] = useState("");
  const pressW = useKeyPress("w")
  const pressQ = useKeyPress("q")

  useEffect(() => {
    console.log("W is Pressed")
  }, [pressW])

  useEffect(() => {
    console.log("Q is Pressed")
  }, [pressQ])

  return (
    <div>
      <input
        onChange={e => setInputVal(e.target.value)}
        placeholder="Enter your value"
        value={inputVal}
      />
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('HOC')
  console.log({activeTab})

  return (
    <>
      <div class="tab">
        <button class={`tablinks ${activeTab === 'HOC' ? 'active' : ''}`} onClick={() => setActiveTab('HOC')}>HOC</button>
        <button class={`tablinks ${activeTab === 'RENDER_PROPS' ? 'active' : ''}`} onClick={() => setActiveTab('RENDER_PROPS')}>Render Props</button>
        <button class={`tablinks ${activeTab === 'HOOKS_PATTERN' ? 'active' : ''}`} onClick={() => setActiveTab('HOOKS_PATTERN')}>Hooks Pattern</button>
      </div>
      {activeTab === "HOC" && renderHOC()}
      {activeTab === "RENDER_PROPS" && renderProps()}
      {renderHooks()}
    </>
  )
}

export default App
