import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import './repoCard.css';

const RepoCard = ({ repo }) => {
  return (
    <section className="repo-card">
      <h2 className="repo-card__name">{repo.name}</h2>
      <p className="repo-card__description">{repo.description}</p>
      <Button label="View Details" to={`/repo/${repo.id}`} className="repo-card__button" />
    </section>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoCard;
