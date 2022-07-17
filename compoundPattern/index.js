import Expandable from "./Expandable"
console.log(Expandable)

const App = () => <div>Test</div>
const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)
root.render(<App/>)
