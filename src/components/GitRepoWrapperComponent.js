import React from 'react';
import GitRepoComponent from './GitRepoComponent';


class GitRepoWrapperComponent extends React.Component {
  constructor() {
    super();
    this.fetchRepos = this.fetchRepos.bind(this);
    this.renderRepos = this.renderRepos.bind(this);
    this.state = {repos: []};
  }
  render() {
    //es6 write HTML directly in js
    return (
    <div>
      <button onClick={this.fetchRepos}>
        <h1 className="repos-label">Git Repos</h1>
      </button>
      <div>
        {this.state.repos}
      </div>
    </div>
    )
  }
  fetchRepos() {
    //fetch repos
    var repoList = ["repo1", "repo2", "repo3","repo4", "repo5", "repo6"];
    console.log("fetching");
    this.renderRepos(repoList);
  }
  renderRepos(repoList){
    console.log("inside render repos");
    var list = [];
    repoList.forEach(function(repo) {
          list.push(<GitRepoComponent name={repo}/>)
    });
    this.setState({repos: list});
  }
}

export default GitRepoWrapperComponent;
