import { languageData } from "../data/languageData";


const LanguageFacts = ({searchTerm}) => {
    const queryResult = languageData.filter(({lang}) => lang.toLowerCase().includes(searchTerm.toLowerCase()))
    if(!queryResult.length){
        return <h3>We dont have info about {searchTerm}</h3>
    }
    return (
        <>
        <h3>Facts about {searchTerm} are:</h3>
        {queryResult.map((lang,idx) => <p key={idx}>{lang.info}</p>)}
        </>
    )
}

export default LanguageFacts