const ExpandableContext = React.createContext()
const {Provider} = ExpandableContext

const Expandable = ({children}) => {
    const [expanded, setExpanded] = React.useState(false)

    const toggle = setExpanded(prevExpanded => !prevExpanded)
    return <Provider>{children}</Provider>
}

export default Expandable