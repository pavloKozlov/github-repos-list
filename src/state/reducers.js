import { combineReducers } from 'redux';
import { reducer as repos } from './repos/repos.reducer.js';

const rootReducer = combineReducers({
  repos,
});

export { rootReducer };
