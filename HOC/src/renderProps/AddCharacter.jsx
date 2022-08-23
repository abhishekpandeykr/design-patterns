import { useState } from "react";

export default function AddCharacter(props) {
    const [character, setCharacter] = useState("");

    return (
        <>
            <input 
                type={"text"}
                value={character}
                placeholder="Search Your Language"
                onChange={e => setCharacter(e.target.value)}
            />
            {props.render(character)}
        </>
    )
}