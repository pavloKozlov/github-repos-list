import React, { useEffect } from 'react';
import { ReposList } from './components/reposList/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from './state/repos/repos.actions.js';

function App() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);

  useEffect(() => {
    // componentDidMount
    dispatch(fetchRepos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <ReposList items={repos} />
    </div>
  );
}

export default App;
