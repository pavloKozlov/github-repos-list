import React from 'react';
import './reposListHeader.scss';
import '../reposListItem/reposListItem.scss';

const ReposListHeader = () => (
  <div className="repos-list-header repos-list-row">
    <div className="repos-list-row__column repos-list-row__column-name">
      Name
    </div>
    <div className="repos-list-row__column repos-list-row__column-description">
      Description
    </div>
    <div className="repos-list-row__column repos-list-row__column-url">Url</div>
  </div>
);

export { ReposListHeader };
