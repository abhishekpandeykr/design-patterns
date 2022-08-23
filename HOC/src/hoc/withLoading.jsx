import { useState, useEffect } from "react"

export default function withLoader(Element, url) {
    return props => {
        const [data, setData] = useState([]);
        console.log("props are", props)
        useEffect(() => {
            async function getData(){
                const res = await fetch(url);
                const result = await res.json();
                setData(result);
            }
            getData();
        }, [])

        if(!Object.keys(data).length){
            return <div>Loading...</div>
        }
        return <Element {...props} data={data} />
    }
}