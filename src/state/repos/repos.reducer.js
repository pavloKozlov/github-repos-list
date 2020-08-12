import {
  FETCH_REPOS_START,
  FETCH_REPOS_SUCCEEDED,
  FETCH_REPOS_FAILED,
  SELECT_REPOS_PAGE,
} from './repos.actionConsts.js';

const ITEMS_PER_PAGE = 20;

const initialState = {
  allItems: [],
  totalPages: 0,
  selectedPage: -1,
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
        ...state,
        totalPages: 0,
        selectedPage: -1,
        allItems: [],
        items: [],
        loading: true,
        error: false,
      };
      break;
    case FETCH_REPOS_SUCCEEDED:
      newState = {
        ...state,
        allItems: action.payload,
        totalPages: Math.ceil(action.payload.length / ITEMS_PER_PAGE),
        loading: false,
      };
      break;
    case FETCH_REPOS_FAILED:
      newState = {
        ...state,
        allItems: [],
        items: [],
        loading: false,
        error: true,
      };
      break;
    case SELECT_REPOS_PAGE:
      // substract 1 since page is 1-based and indexation is 0-based
      const startIndex = (action.payload - 1) * ITEMS_PER_PAGE;
      newState = {
        ...state,
        items: state.allItems.slice(
          startIndex,
          startIndex + ITEMS_PER_PAGE + 1
        ),
        selectedPage: action.payload,
      };
      break;
    default:
  }
  return newState;
};

export { reducer };
