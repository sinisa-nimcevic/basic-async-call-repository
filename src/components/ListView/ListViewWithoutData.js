import React from 'react';
import slugify from 'slugify';

const ListViewWithoutData = ({ data }) => {
  return (
    <ul className="list-view">
      {data.map((item) => (
        <li key={`${item.id}-${slugify(item.title)}`}>
          <span>{item.id}</span> {item.title}
        </li>
      ))}
    </ul>
  );
};

export default ListViewWithoutData;
