import { gitHuibService } from '../../services/gitHubService.js';
import {
  FETCH_REPOS_START,
  FETCH_REPOS_SUCCEEDED,
  FETCH_REPOS_FAILED,
  SELECT_REPOS_PAGE,
} from './repos.actionConsts.js';

/**
 * Action that fetches the repost from the service and populates the result into redux.
 *
 * @returns {function(*): Q.Promise<any> | Promise<void> | undefined}
 */
const fetchRepos = () => async (dispatch) => {
  await dispatch({ type: FETCH_REPOS_START });
  try {
    const data = await gitHuibService.fetchRepos();
    await dispatch({ type: FETCH_REPOS_SUCCEEDED, payload: data });
    await dispatch(selectPage(1));
  } catch {
    dispatch({ type: FETCH_REPOS_FAILED });
  }
};

const selectPage = (pageNumber) => (dispatch) =>
  dispatch({ type: SELECT_REPOS_PAGE, payload: pageNumber });

export { fetchRepos, selectPage };
