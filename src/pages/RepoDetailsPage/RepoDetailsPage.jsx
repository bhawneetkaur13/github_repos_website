import React, { lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import * as labels from "../../utils/labels";
import "./repoDetailsPage.css";
import Button from "../../components/atoms/Button/Button";

const BackIcon = lazy(() => import("../../components/atoms/SVGRs/BackIcon"));
const CodeBranch = lazy(() =>
  import("../../components/atoms/SVGRs/CodeBranch")
);
const Watchers = lazy(() => import("../../components/atoms/SVGRs/Watchers"));
const OpenIssues = lazy(() =>
  import("../../components/atoms/SVGRs/OpenIssues")
);

const RepoDetailsPage = () => {
  const { id } = useParams();
  const {
    data: repos,
    loading,
    error,
  } = useFetch(process.env.REACT_APP_GITHUB_API);

  const repo = repos.find((repo) => repo.id === Number(id));

  if (loading) return <p>{labels.LOADING}</p>;
  if (error) return <p>{labels.LOADING_ERROR}</p>;

  if (!repo) return <p>{labels.REPO_NOT_FOUND}</p>;

  return (
    <section className="repo-details">
      <Suspense fallback={<div>Loading...</div>}>
        <Link to="/" className="repo-details__back-btn">
          <BackIcon className="repo-details__back-icon" />{" "}
          {labels.BACK_TO_REPOS}
        </Link>
      </Suspense>
      <h1 className="repo-details__title">{repo.name || labels.REPO_NAME}</h1>
      <p className="repo-details__description">
        {repo.description || labels.REPO_DESCRIPTION}
      </p>
      <p className="repo-details__language">
        {labels.REPO_LANGUAGE}: {repo.language || "N/A"}
      </p>
      <div className="repo-details__item">
        <Suspense fallback={<div>Loading...</div>}>
          <CodeBranch />
        </Suspense>
        <span>{labels.REPO_FORKS}:</span> {repo.forks}
      </div>

      <div className="repo-details__item">
        <Suspense fallback={<div>Loading...</div>}>
          <OpenIssues />
        </Suspense>
        <span>{labels.REPO_ISSUES}:</span> {repo.open_issues}
      </div>

      <div className="repo-details__item">
        <Suspense fallback={<div>Loading...</div>}>
          <Watchers />
        </Suspense>
        <span>{labels.REPO_WATCHERS}:</span> {repo.watchers}
      </div>
      <Button
        label={labels.REPO_LINK}
        to={repo.html_url}
        external
        className="repo-details__button"
      />
    </section>
  );
};

export default RepoDetailsPage;
