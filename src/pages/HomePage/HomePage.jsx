import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import RepoList from '../../components/organisms/RepoList/RepoList';
import './homePage.css';

const HomePage = () => {
  const { data: repos, loading, error } = useFetch(process.env.REACT_APP_GITHUB_API);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery)
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching repos</p>;

  return (
    <main className="home">
      <header className='home__header'>
      <h1 className="home__title">GitHub Repositories</h1>
      <input
        type="text"
        placeholder="Search Repositories"
        value={searchQuery}
        onChange={handleSearchChange}
        className="home__search"
      />
      </header>
      <RepoList repos={filteredRepos} />
    </main>
  );
};

export default HomePage;
