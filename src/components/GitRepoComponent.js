import React from 'react';

class GitRepoComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="repo-entry">
        <br/>
      <h2 className="repo-label">{this.props.name}</h2>
      <button className="repo-toggle-button" onClick={this.toggleRepo}>
      Toggle Repo
      </button>
    </div>
    )
  }
toggleRepo(org, repoName, toggleState) {
    //send toggle state to update repo
    console.log("toggling");
}
}

export default GitRepoComponent;
 