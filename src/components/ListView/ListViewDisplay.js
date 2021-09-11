import React from 'react';
import ListItem from '../ListItem/ListItem';
import slugify from 'slugify';

const ListViewDisplay = ({ data }) => {
  return (
    <ul className="list-view">
      {data.map((item) => (
        <ListItem item={item} key={`${item.id}-${slugify(item.title)}`} />
      ))}
    </ul>
  );
};

export default ListViewDisplay;
