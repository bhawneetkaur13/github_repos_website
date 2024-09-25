import React from 'react';
import PropTypes from 'prop-types';
import RepoCard from '../../molecules/RepoCard/RepoCard';
import './repoList.css';

const RepoList = ({ repos }) => {
  return (
    <section className="repo-list">
      {repos.map(repo => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </section>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired
};

export default RepoList;
