import './App.css'
import DogImages from './components/DogImages'
import withStyles from './hoc/withStyle'

const Button = () => <button>Click Me!!!</button>
const Text = () => <p>Hello World!!!</p>

const StyledButton = withStyles(Button)
const StyledText = withStyles(Text)

function App() {

  return (
    <>
      <h3>Here we are Rendering HOC</h3>
      <StyledButton />
      <StyledText />
      <DogImages />
    </>
  )
}

export default App
