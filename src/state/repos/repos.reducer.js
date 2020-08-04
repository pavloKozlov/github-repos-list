import {
  FETCH_REPOS_START,
  FETCH_REPOS_SUCCEEDED,
  FETCH_REPOS_FAILED,
} from './repos.actionConsts.js';

const initialState = {
  items: [],
  loading: false,
  error: false,
};

/**
 * Repos reducer.
 *
 * @param state
 * @param action
 * @returns {*}
 */
const reducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case FETCH_REPOS_START:
      newState = {
        items: [],
        loading: true,
        error: false,
      };
      break;
    case FETCH_REPOS_SUCCEEDED:
      newState = {
        items: action.payload,
        loading: false,
      };
      break;
    case FETCH_REPOS_FAILED:
      newState = {
        items: [],
        loading: false,
        error: true,
      };
      break;
    default:
  }
  return newState;
};

export { reducer };
