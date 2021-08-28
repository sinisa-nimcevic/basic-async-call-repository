import React from 'react';

const ListViewWithoutData = ({ data }) => {
  return (
    <ul className="list-view">
      {data.map((item) => {
        const { id, title } = item;
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
};

export default ListViewWithoutData;
