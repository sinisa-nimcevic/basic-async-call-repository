import React, { useEffect, useState } from 'react';
import { getMyData } from '../../services/dataService';
import ListViewWithoutData from './ListViewWithoutData';

const ListView = () => {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMyData();
        setLoading(false);
        const { data, error } = response;
        if (data && !error) {
          setListData(data);
        } else {
          throw new Error(error);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h3>List view</h3>
      {loading && <>loading...</>}
      <ListViewWithoutData data={listData} />
    </>
  );
};

export default ListView;
