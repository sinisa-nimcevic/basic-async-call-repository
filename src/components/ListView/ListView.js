import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectDataSlice } from '../../redux/slices/projectDataSlice';
import { fetchProjectDataThunk } from '../../redux/thunks/projectDataThunk';
import ListViewDisplay from './ListViewDisplay';
import './ListView.scss';

const ListView = () => {
  const dataStatus = useSelector(getProjectDataSlice);
  const { data, loading, error } = dataStatus;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectDataThunk());
  }, [dispatch]);

  return (
    <div className="list-view">
      <h3>List view</h3>
      {loading && <>loading...</>}
      {error && <>error</>}
      <ListViewDisplay data={data} />
    </div>
  );
};

export default ListView;
