import { RepoInfo } from "./RepoInfo";

const RepoContainer = ({resource}) => {
    const repositoryList = resource.read();
    return (
        <div className="repoContainer">
            {repositoryList.map((repo, index) => <RepoInfo repo={repo} key={index}/>)}
        </div>
    )
}

export default RepoContainer