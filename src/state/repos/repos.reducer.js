import { FETCH_REPOS_SUCCEEDED } from './repos.actionConsts.js';

const initialState = {
  items: [],
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
    case FETCH_REPOS_SUCCEEDED:
      newState = action.payload;
      break;
    default:
  }
  return newState;
};

export { reducer };
