import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

const RepoDetailsPage = lazy(() => import('./pages/RepoDetailsPage/RepoDetailsPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/repo/:id" element={<RepoDetailsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
