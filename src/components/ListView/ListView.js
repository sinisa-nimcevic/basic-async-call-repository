import React, { useContext, useEffect } from 'react';
import GlobalStateContext from '../../contexts/globalStateContext';
import { FETCH_COMMAND, states } from '../../machines/dataMachine';
import ListViewWithoutData from './ListViewWithoutData';

const ListView = () => {
  const globalState = useContext(GlobalStateContext);
  const [current, send] = globalState;
  const loading = current.matches(states.loading);
  const error = current.matches(states.rejected);
  const { data } = current.context;

  useEffect(() => {
    send(FETCH_COMMAND);
  }, [send]);

  return (
    <>
      <h3>List view</h3>
      {loading && <>loading...</>}
      {error && <>error...</>}
      <ListViewWithoutData data={data} />
    </>
  );
};

export default ListView;
