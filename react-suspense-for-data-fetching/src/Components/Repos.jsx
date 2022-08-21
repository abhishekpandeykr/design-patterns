import { getStatusChecker } from "../services/serviceHelper";
import ErrorBoundary from "./ApplicationErrorBoundry";
import {RepoInfo} from "./RepoInfo"

const result = getStatusChecker(fetch("https://api.github.com/users/vitejs/repos"));
export function Repos(){
    const response = result.read();

    return (<div>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <h3>Repository List</h3>
            <div className="repoContainer">
                {response.map((repo, index) => <RepoInfo repo={repo} key={index}/>)}
            </div>
        </ErrorBoundary>
    </div>)
}