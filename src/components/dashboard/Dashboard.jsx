import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReposList } from '../reposList/index.js';
import { Pagination } from '../pagination/index.js';
import { fetchRepos } from '../../state/repos/repos.actions.js';
import './dashboard.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);

  useEffect(() => {
    // componentDidMount
    dispatch(fetchRepos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashboard">
      <Pagination />
      <ReposList items={repos} />
    </div>
  );
};

export { Dashboard };
