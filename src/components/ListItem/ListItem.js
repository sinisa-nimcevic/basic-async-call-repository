import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSelectItem } from '../../redux/slices/projectDataSlice';
import ListItemDisplay from './ListItemDisplay';

const ListItem = ({ item }) => {
  const { id } = item;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSelectItem({ id }));
  };

  return <ListItemDisplay item={item} handleClick={handleClick} />;
};

export default ListItem;
