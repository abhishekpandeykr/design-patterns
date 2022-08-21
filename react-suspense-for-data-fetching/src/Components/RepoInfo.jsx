export const RepoInfo = (({repo}) => (
   <div className="repoInfo">
         <div className="repoName">
               <a href={repo.html_url} target="_blank">{repo.name}</a>
         </div>
         <div className="repoDescription">{repo.description}</div>
         <div className="repoLanguage">{repo.language}</div>
         <div className="repoStars">{repo.stargazers_count}</div>
         <div className="repoForks">{repo.forks}</div>
         <div className="repoImage">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
         </div>
   </div>
))