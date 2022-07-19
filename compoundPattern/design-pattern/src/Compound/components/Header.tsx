import { useContext } from "react";
import { ExpandableContext } from "../Compound";


const Header = ({children}:any) => {
    const {toggle} = useContext(ExpandableContext)

    return <div onClick={toggle}>{children}</div>
}