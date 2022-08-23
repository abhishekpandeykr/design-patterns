import { useState } from "react";

export default function AddCharacter(props) {
    const [character, setCharacter] = useState("");

    return (
        <>
            <input 
                type={"text"}
                value={character}
                placeholder="Enter Your Character Name"
                onChange={e => setCharacter(e.target.value)}
            />
            {props.render(character)}
        </>
    )
}