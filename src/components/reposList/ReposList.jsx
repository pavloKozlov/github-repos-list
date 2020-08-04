import React from 'react';
import { ReposListItem } from './reposListItem/index.js';
import { ReposListHeader } from './reposListHeader/index.js';
import './reposList.scss';

// TODO: use memo
const ReposList = ({ items }) => (
  <div className="repos-list">
    <ReposListHeader />
    <ul className="repos-list__list">
      {items.map((item) => (
        <ReposListItem
          {...{
            key: item.id,
            name: item.name,
            description: item.description,
            url: item.html_url,
          }}
        />
      ))}
    </ul>
  </div>
);

export { ReposList };
