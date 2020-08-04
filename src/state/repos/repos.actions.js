import { fetchRepos } from '../../services/gitHubService.js';
import {
  FETCH_REPOS_SUCCEEDED,
  FETCH_REPOS_FAILED,
} from './repos.actionConsts.js';

/**
 * Action that fetches the repost from the service and populates the result into redux.
 *
 * @returns {function(*): Q.Promise<any> | Promise<void> | undefined}
 */
const fetchRepos = () => (dispatch) =>
  fetchRepos()
    .then((data) => dispatch({ type: FETCH_REPOS_SUCCEEDED, payload: data }))
    .catch(() => dispatch(FETCH_REPOS_FAILED));

export { fetchRepos };
