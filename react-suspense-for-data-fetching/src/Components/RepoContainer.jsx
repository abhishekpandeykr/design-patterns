import { RepoInfo } from "./RepoInfo";

export const RepoContainer = ({resource}) => {
    const repositoryList = resource.read();
    return (
        <div className="repoContainer">
            {repositoryList.map((repo, index) => <RepoInfo repo={repo} key={index}/>)}
        </div>
    )
}