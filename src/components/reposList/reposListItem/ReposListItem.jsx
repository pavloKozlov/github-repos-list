import React from 'react';
import './reposListItem.scss';

const ReposListItem = ({ name, description, url }) => {
  return (
    <li className="repos-list-row">
      <div className="repos-list-row__column repos-list-row__column-name">
        {name}
      </div>
      <div className="repos-list-row__column repos-list-row__column-description">
        {description}
      </div>
      <div className="repos-list-row__column repos-list-row__column-url">
        <a href={url}>{url}</a>
      </div>
    </li>
  );
};

export { ReposListItem };
