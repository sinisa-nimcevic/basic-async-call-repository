import React from 'react';
import classname from 'classname';
import './ListItem.scss';

const ListItemDisplay = ({ item, handleClick }) => {
  const { isActive, id, title } = item;

  return (
    <li onClick={handleClick} className={classname('list-item', isActive && 'list-item--active')}>
      <span className="list-item__id">{id}</span>
      <span className="list-item__content">{title}</span>
    </li>
  );
};

export default ListItemDisplay;
