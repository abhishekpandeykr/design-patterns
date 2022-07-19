import { createContext, useState, useCallback, useMemo, useRef, useEffect } from "react";

export function getReactContext(options:any = {}) {
    return createContext(options.value)
}

export const ExpandableContext = getReactContext();
const { Provider } = ExpandableContext


const Exapndable = ({children, onExpand}:any) => {
    const [expanded, setExpanded] = useState(false)
    const componentJustMounted = useRef(true)

    useEffect(() => {
        if(!componentJustMounted.current){
            onExpand(expanded)
        }
        componentJustMounted.current = false
    }, [expanded])

    const toggle = useCallback(() => setExpanded(prevExpanded => !prevExpanded), [])
    const value = useMemo(
        () => ({ expanded, toggle }), 
        [expanded, toggle]
    )
    return <Provider value={value}>{children}</Provider>
}

export default Exapndable