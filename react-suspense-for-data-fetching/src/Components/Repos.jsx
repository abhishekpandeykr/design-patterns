import ErrorBoundary from "./ApplicationErrorBoundry";
import {RepoInfo} from "./RepoInfo"

let response;
let error;
let promise = fetch("https:/repos")
    .then(res => res.json())
    .then(val => {
        response = val
    }).catch(err => {
        console.log("error", err)
        error = err
    })


export function Repos(){
    if(error){
        return <div>{error.message}</div>
    }

    if(!response){
        throw promise;
    }

    return (<div>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <h3>Repository List</h3>
            {response.map((repo, index) => <RepoInfo repo={repo} key={index}/>)}
        </ErrorBoundary>
    </div>)
}