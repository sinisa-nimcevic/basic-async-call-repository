import React from 'react';
import slugify from 'slugify';

const ListViewWithoutData = ({ data }) => {
  return (
    <ul className="list-view">
      {data.map((item) => (
        <li key={`${item.id}-${item.title}`}>
          <span>{item.id}</span> {slugify(item.title)}
        </li>
      ))}
    </ul>
  );
};

export default ListViewWithoutData;
